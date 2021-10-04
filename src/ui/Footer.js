import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.common.orange,
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  divider: {
    backgroundColor: "#fff",
    width: "50em",
    [theme.breakpoints.down("md")]: {
      width: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
    opacity: 0.5,
    marginBottom: "1em",
  },
  footerTab: {
    ...theme.typography.tabs,
    fontSize: "1rem",
    color: theme.palette.common.purple,
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginRight: "1rem",
    marginLeft: "1rem",
  },
  footerLogo: {
    height: "3em",
    width: "3em",
    marginBottom: "1em",
  },
  socialMediaIcon: {
    height: "2em",
    width: "2em",
    marginTop: "0.5em",
    marginRight: "0.5em",
    marginLeft: "0.5em",
  },
  copyright: {
    color: theme.palette.common.purple,
    marginTop: "1em",
  },
  footerLogoContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function Footer({ value, setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const tabs = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About", link: "/about", activeIndex: 1 },
    { name: "Contact", link: "/contact", activeIndex: 2 },
    { name: "Projects", link: "/projects", activeIndex: false },
  ];

  const socialMediaIcons = [
    {
      href: "https://www.linkedin.com/in/jay-mckenzie-a4982253/",
      src: "/assets/linkedin.svg",
      alt: "linkedin link",
    },
    {
      href: "https://github.com/JayMcK",
      src: "/assets/github.svg",
      alt: "github link",
    },
  ];

  return (
    <Grid item>
      <Grid container direction="column" className={classes.footerContainer}>
        <Grid item align="center">
          <Button
            component={Link}
            href="/"
            onClick={() => setValue(0)}
            disableRipple
            className={classes.footerLogoContainer}
          >
            <img
              src="/assets/logo.svg"
              alt="portfolio logo"
              className={classes.footerLogo}
            />
          </Button>
        </Grid>
        <Divider
          className={classes.divider}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Grid
          container
          direction={matchesXS ? "column" : "row"}
          justifyContent="center"
          alignItems={matchesXS ? "center" : undefined}
        >
          {tabs.map((tab) => (
            <Grid item key={tab.name}>
              <Button
                className={classes.footerTab}
                component={Link}
                href={tab.link}
                onClick={() => setValue(tab.activeIndex)}
                disableRipple
              >
                {tab.name}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="row" justifyContent="center">
          {socialMediaIcons.map((icon) => (
            <Grid
              key={icon.href}
              item
              component={"a"}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className={classes.socialMediaIcon}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item align="center">
          <Typography variant="body1" className={classes.copyright}>
            © Jay McKenzie 2021
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
