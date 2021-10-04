import React from "react";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  oopsImage: {
    height: "15em",
  },
  linkText: {
    textDecoration: "none",
    fontWeight: "bold",
  },
  homeButton: {
    ...theme.typography.learnButton,
    fontFamily: " Caveat Brush",
    borderRadius: 50,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
    fontWeight: 500,
    width: 200,
    height: 50,
    fontSize: "1.25rem",
    marginLeft: "1em",
    marginRight: "1em",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
}));

export default function NotFound({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const links = [
    { name: "Recent Projects", to: "/projects", activeIndex: 3 },
    { name: "About Me", to: "/about", activeIndex: 1 },
    { name: "Contact Me", to: "/contact", activeIndex: 2 },
  ];

  return (
    <Grid item style={{ minHeight: "100vh" }}>
      <Grid container direction="column">
        <Grid
          item
          style={{
            marginTop: "5em",
            marginLeft: matchesMD ? "1em" : 0,
            marginRight: matchesMD ? "1em" : 0,
          }}
          align="center"
        >
          {/* ----- Info Block ----- */}
          <Typography variant="h2" style={{ fontSize: "5rem" }}>
            404
          </Typography>
          <Typography variant="h3">
            Sorry, we couldn't find that page...
          </Typography>
        </Grid>
        <Grid item align="center">
          <img
            src="/assets/oops.svg"
            alt="oops written in a speech bubble"
            className={classes.oopsImage}
          />
        </Grid>
        <Grid
          item
          align="center"
          style={{
            marginLeft: matchesMD ? "1em" : 0,
            marginRight: matchesMD ? "1em" : 0,
            marginTop: "0.5em",
          }}
        >
          <Typography variant="subtitle1">
            But we're here to help! Maybe one of these will point you in the
            right direction?
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- Links Block ----- */}
        <Grid
          container
          direction="column"
          justifyContent="center"
          style={{ marginTop: "2em" }}
        >
          {links.map((link) => (
            <Grid item key={link.to} sm align="center">
              <Typography
                className={classes.linkText}
                component={Link}
                href={link.to}
                variant="subtitle1"
                onClick={() => setValue(link.activeIndex)}
              >
                {link.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        {/* ----- Home Button Block ----- */}
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: "2em", marginBottom: "3em" }}>
            <Button
              component={Link}
              href="/"
              className={classes.homeButton}
              variant="contained"
              onClick={() => setValue(0)}
            >
              Go Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
