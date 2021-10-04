import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { getWebProjects } from "../src/data/projectData";
import { getAPIProjects } from "../src/data/projectData";

import LightProject from "../src/commonComponents/LightProjectInfo";
import PurpleProject from "../src/commonComponents/PurpleProjectInfo";
import OrangeProject from "../src/commonComponents/OrangeProjectInfo";
import ContactCard from "../src/ui/ContactCard";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "35em",
    [theme.breakpoints.down("md")]: {
      width: "30em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "17em",
    },
  },
  purpleBackground: {
    backgroundColor: theme.palette.common.purple,
  },
  orangeBackground: {
    backgroundColor: theme.palette.common.orange,
  },
  greyBackground: {
    backgroundColor: theme.palette.grey[200],
  },
}));

export default function Projects({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [webProjects, setWebProjects] = useState(null);
  const [APIProjects, setAPIProjects] = useState(null);

  useEffect(() => {
    const webProjects = getWebProjects();
    const APIProjects = getAPIProjects();

    setWebProjects(webProjects);
    setAPIProjects(APIProjects);
  }, []);

  return (
    <Grid item>
      <Grid container direction="column" style={{ marginTop: "3em" }}>
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : "5em" }}
          align={matchesMD ? "center" : undefined}
        >
          <Typography variant="h1">Recent Projects</Typography>
        </Grid>
        <Grid item align="center" style={{ marginTop: "5em" }}>
          <Typography variant="h2">Website Applications</Typography>
        </Grid>
        <Grid item>
          {/* ----- Web Apps Section ----- */}
          <Grid item>
            {/* ----- Flow Living Web App Section ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              alignItems="center"
              className={classes.greyBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
            >
              <Grid
                item
                md
                container
                alignItems="center"
                justifyContent="center"
              >
                <Hidden mdDown>
                  <Grid
                    item
                    component={"a"}
                    href={webProjects && webProjects[0].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    align="center"
                  >
                    <img
                      src={webProjects && webProjects[0].imageLarge}
                      alt={webProjects && webProjects[0].alt}
                      className={classes.image}
                    />
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item md container>
                {webProjects && (
                  <LightProject projectType="web" info={webProjects[0]} />
                )}
              </Grid>
              <Hidden lgUp>
                <Grid
                  item
                  component={"a"}
                  href={webProjects && webProjects[0].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  align="center"
                >
                  <img
                    src={webProjects && webProjects[0].imageLarge}
                    alt={webProjects && webProjects[0].alt}
                    className={classes.image}
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
          <Grid item>
            {/* ----- Fox Tree Kids Web App Section ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              alignItems="center"
              className={classes.purpleBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
            >
              <Grid item md container>
                {webProjects && (
                  <PurpleProject projectType="web" info={webProjects[1]} />
                )}
              </Grid>
              <Grid
                item
                md
                component={"a"}
                href={webProjects && webProjects[1].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                align="center"
              >
                <img
                  src={webProjects && webProjects[1].imageLarge}
                  alt={webProjects && webProjects[1].alt}
                  className={classes.image}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item align="center" style={{ marginTop: "5em" }}>
          <Typography variant="h2">Fun with APIs</Typography>
        </Grid>
        <Grid item>
          {/* ----- APIs Section ----- */}
          <Grid item>
            {/* ----- API Project 1 ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              alignItems="center"
              className={classes.orangeBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
            >
              <Grid
                item
                md
                container
                alignItems="center"
                justifyContent="center"
              >
                <Hidden mdDown>
                  <Grid
                    item
                    component={"a"}
                    href={APIProjects && APIProjects[0].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    align="center"
                  >
                    <img
                      src={APIProjects && APIProjects[0].imageLarge}
                      alt={APIProjects && APIProjects[0].alt}
                      className={classes.image}
                    />
                  </Grid>
                </Hidden>
              </Grid>
              <Grid item md container>
                {APIProjects && (
                  <OrangeProject projectType="api" info={APIProjects[0]} />
                )}
              </Grid>
              <Hidden lgUp>
                <Grid
                  item
                  component={"a"}
                  href={APIProjects && APIProjects[0].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  align="center"
                >
                  <img
                    src={APIProjects && APIProjects[0].imageLarge}
                    alt={APIProjects && APIProjects[0].alt}
                    className={classes.image}
                  />
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
          <Grid item>
            {/* ----- API Project 2 ----- */}
            <Grid
              container
              direction={matchesMD ? "column" : "row"}
              alignItems="center"
              className={classes.greyBackground}
              style={{ paddingTop: "5em", paddingBottom: "5em" }}
            >
              <Grid item md container>
                {APIProjects && (
                  <LightProject projectType="api" info={APIProjects[1]} />
                )}
              </Grid>
              <Grid
                item
                md
                component={"a"}
                href={APIProjects && APIProjects[1].liveLink}
                target="_blank"
                rel="noopener noreferrer"
                align="center"
              >
                <img
                  src={APIProjects && APIProjects[1].imageLarge}
                  alt={APIProjects && APIProjects[1].alt}
                  className={classes.image}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ContactCard setValue={setValue} />
      </Grid>
    </Grid>
  );
}
