import React, { useState, Fragment, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  cardBlockContainer: {
    backgroundImage: `url("/assets/cardBackground.png")`,
    height: "50em",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
  },
  cardBackground: {
    backgroundColor: theme.palette.common.gold,
  },
  cardContainer: {
    borderRadius: 50,
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0,
    },
    paddingRight: "2em",
    paddingLeft: "2em",
    paddingTop: "3em",
    paddingBottom: "3em",
    border: `2px solid ${theme.palette.common.purple}`,
  },
  cardTitle: {
    color: theme.palette.common.purple,
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
    fontWeight: 800,
  },
  rightArrow: {
    height: "1em",
    marginLeft: "0.5em",
  },
}));

export default function ContactCard({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item className={classes.cardBlockContainer}>
      {/* ----- Card Block ----- */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "50em" }}
      >
        <Card elevation={0} classes={{ root: classes.cardContainer }}>
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item align="center">
                <Typography variant="h5" className={classes.cardTitle}>
                  Contact Me
                </Typography>
              </Grid>
              <Grid item align="center">
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.grey[700] }}
                  paragraph
                >
                  Currently open to opportunities
                </Typography>
              </Grid>
              <Grid item align="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButton}
                  component={Link}
                  href="/contact"
                  onClick={() => {
                    setValue(2);
                  }}
                >
                  Learn More
                  <img
                    src="/assets/rightArrow.svg"
                    alt="right arrow"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
