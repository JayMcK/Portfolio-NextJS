import React, { useState, Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../Link";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    minHeight: "72px",
    [theme.breakpoints.down("md")]: {
      minHeight: "72px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "58px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "38px",
    },
  },
  headerLogo: {
    height: "6em",
    marginTop: "0.5em",
    marginBottom: "0.5em",
    marginLeft: "0.5em",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
  projectsButton: {
    ...theme.palette.projectsButton,
    color: theme.palette.common.orange,
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    height: 45,
    width: 220,
    marginRight: "0.5em",
  },
  logoContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: 0,
  },
  tab: {
    ...theme.typography.tabs,
    textTransform: "none",
    color: theme.palette.common.purple,
    minWidth: 10,
    marginLeft: "25px",
    marginRight: "25px",
  },
  tabContainer: {
    margin: "auto",
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  listItemIcon: {
    minWidth: "40px",
  },
  drawerItem: {
    ...theme.typography.h3,
    fontSize: "1.25rem",
    color: "#fff",
    opacity: 0.7,
  },
  text: {
    marginBottom: 0,
  },
  drawerProjectsButton: {
    backgroundColor: theme.palette.common.purple,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "40px",
    },
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "none",
  },
  appbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.25em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5em",
    },
  },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header({ value, setValue }) {
  const classes = useStyles();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [previousURL, setPreviousURL] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const routes = [
    {
      name: "Home",
      activeIndex: 0,
      link: "/",
      icon: <HomeIcon color="primary" fontSize="medium" />,
    },
    {
      name: "About",
      activeIndex: 1,
      link: "/about",
      icon: <PersonIcon color="primary" fontSize="medium" />,
    },
    {
      name: "Contact",
      activeIndex: 2,
      link: "/contact",
      icon: <PhoneIcon color="primary" fontSize="medium" />,
    },
  ];

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname);
    }
    checkPath();
  }, [value, routes]);

  const checkPath = () => {
    [...routes].forEach((route) => {
      switch (window.location.pathname) {
        case "/":
          setValue(0);
          break;
        case "/about":
          setValue(1);
          break;
        case "/contact":
          setValue(2);
          break;
        case "/projects":
          setValue(false);
          break;
        case "/not-found":
          setValue(false);
          break;
        default:
          break;
      }
    });
  };

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="header tabs"
        className={classes.tabContainer}
        classes={{ root: classes.tabsRoot }}
      >
        {routes.map((route) => (
          <Tab
            key={route.link}
            disableRipple
            className={classes.tab}
            label={route.name}
            component={Link}
            href={route.link}
          />
        ))}
      </Tabs>
      <Button
        className={classes.projectsButton}
        variant="contained"
        color="primary"
        disableRipple
        onClick={() => setValue(false)}
        component={Link}
        href="/projects"
      >
        recent projects
      </Button>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.appbarMargin} />
        <List component="nav" aria-label="drawer nav">
          {routes.map((route, index) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              button
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              component={Link}
              href={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              divider
            >
              <ListItemIcon classes={{ root: classes.listItemIcon }}>
                {route.icon}
              </ListItemIcon>
              <ListItemText
                disableTypography
                className={classes.drawerItem}
                classes={{ root: classes.text }}
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
            }}
            component={Link}
            href="/projects"
            className={classes.drawerProjectsButton}
            divider
          >
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              <AccountTreeIcon color="secondary" fontSize="medium" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              className={classes.drawerItem}
              style={{ color: "#fff" }}
              classes={{ root: classes.text }}
            >
              Projects
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          color="primary"
          fontSize="large"
          className={classes.drawerIcon}
        />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar
          elevation={0}
          position="fixed"
          color="secondary"
          className={classes.appBar}
        >
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              href="/"
              disableRipple
              onClick={() => setValue(0)}
            >
              <img
                src="/assets/headerLogo.svg"
                alt="portfolio logo"
                className={classes.headerLogo}
              />
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
