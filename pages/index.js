import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";

import ProjectDialog from "../src/commonComponents/ProjectDialog";
import APIProjectDialog from "../src/commonComponents/APIProjectDialog";
import ContactCard from "../src/ui/ContactCard";

import { getWebProjects } from "../src/data/projectData";
import { getAPIProjects } from "../src/data/projectData";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundColor: theme.palette.common.orange,
    height: "50em",
    marginTop: "1em",
  },
  projectsContainer: {
    backgroundColor: "#fff",
    height: "50em",
  },
  infoContainer: {
    backgroundColor: theme.palette.common.purple,
  },
  downArrow: {
    height: "1.5em",
    width: "1.5em",
  },
  projectImage: {
    height: "40em",
    [theme.breakpoints.down("xs")]: {
      height: "30em",
    },
    border: `2px solid ${theme.palette.common.orange}`,
  },
  projectsButton: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.purple}`,
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
      color: theme.palette.common.orange,
      border: `2px solid ${"#fff"}`,
    },
    fontWeight: 800,
  },
  projectsText: {
    fontSize: "1rem",
    fontWeight: 600,
    color: theme.palette.common.purple,
    "&:hover": {
      color: theme.palette.common.orange,
    },
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
  learnButtonPurple: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
      color: theme.palette.common.purple,
    },
    fontWeight: 800,
    color: theme.palette.common.orange,
  },
  rightArrow: {
    marginLeft: "1em",
    height: "1em",
    width: "1em",
  },
  sectionTitle: {
    textTransform: "none",
  },
  projectLink: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: 0,
  },
  projectTitle: {
    fontSize: "1.5rem",
    color: theme.palette.common.purple,
  },
  specialText: {
    color: theme.palette.common.orange,
    fontFamily: "Caveat Brush",
  },
  infoIcon: {
    height: "15em",
  },
  divider: {
    width: "40em",
    [theme.breakpoints.down("md")]: {
      width: "30em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "25em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "17em",
    },
    backgroundColor: theme.palette.common.purple,
    marginTop: "2.5em",
    marginBottom: "2.5em",
  },
}));

export default function Home({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [dialogOpen, setDialogOpen] = useState(false);
  const [project, setProject] = useState("");
  const [projectType, setProjectType] = useState("");
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
      <Grid container direction="column">
        <Grid item>
          {/* ------ Hero Section ----- */}
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={classes.heroContainer}
          >
            <Grid
              item
              align="center"
              style={{ marginRight: "1em", marginLeft: "1em" }}
            >
              <Typography paragraph variant="h1">
                Front End Web Developer
              </Typography>
            </Grid>
            <Grid item align="center">
              <Typography
                variant="subtitle1"
                style={{ color: theme.palette.common.purple }}
              >
                I use technology to create solutions for businesses
              </Typography>
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Grid item style={{ marginTop: "5em" }}>
                <Button
                  component={Link}
                  href="/projects"
                  onClick={() => setValue(false)}
                  className={classes.projectsButton}
                  disableRipple
                >
                  <Typography variant="h4" className={classes.projectsText}>
                    view recent projects
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------ Web Application Projects Section ----- */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item style={{ marginTop: "5em" }}>
              <Typography variant="h2" className={classes.sectionTitle}>
                Web Applications
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.learnButton}
                component={Link}
                href="/projects"
                onClick={() => {
                  setValue(3);
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
            <Grid container direction={matchesSM ? "column" : "row"}>
              {webProjects &&
                webProjects.map((project) => (
                  <Grid
                    key={project.image}
                    item
                    sm
                    container
                    direction="column"
                    alignItems="center"
                    component={Button}
                    disableRipple
                    onClick={() => {
                      setDialogOpen(true);
                      setProject(project);
                      setProjectType("web");
                    }}
                    className={classes.projectLink}
                    style={{
                      display: "grid",
                    }}
                  >
                    <Grid item style={{ marginTop: "2em" }}>
                      <Typography variant="h5" className={classes.projectTitle}>
                        {project.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={project.imageSmall}
                        alt={project.alt}
                        className={classes.projectImage}
                      />
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item align="center">
          <Divider className={classes.divider} />
        </Grid>
        <Grid item style={{ marginBottom: "5em" }}>
          {/* ------ Fun with APIs Projects Section ----- */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h2" className={classes.sectionTitle}>
                Fun with APIs
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.learnButton}
                component={Link}
                href="/projects"
                onClick={() => {
                  setValue(3);
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
            <Grid container direction={matchesSM ? "column" : "row"}>
              {APIProjects &&
                APIProjects.map((project) => (
                  <Grid
                    key={project.image}
                    item
                    sm
                    container
                    direction="column"
                    alignItems="center"
                    component={Button}
                    disableRipple
                    onClick={() => {
                      setDialogOpen(true);
                      setProject(project);
                      setProjectType("api");
                    }}
                    className={classes.projectLink}
                    style={{
                      display: "grid",
                    }}
                  >
                    <Grid item style={{ marginTop: "2em" }}>
                      <Typography variant="h5" className={classes.projectTitle}>
                        {project.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={project.imageSmall}
                        alt={project.alt}
                        className={classes.projectImage}
                      />
                    </Grid>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.infoContainer}
          style={{ paddingTop: "5em", paddingBottom: "5em" }}
        >
          {/* ----- Info Section ----- */}
          <Grid container direction={matchesSM ? "column" : "row"}>
            {/* ----- Tech Stack Block ----- */}
            <Grid item md container direction="column">
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : "5em",
                }}
                align={matchesSM ? "center" : undefined}
              >
                <Typography
                  variant="h3"
                  paragraph
                  style={{ color: theme.palette.common.orange }}
                >
                  Tech Stack
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  item
                  style={{
                    marginLeft: matchesSM ? "1em" : "5em",
                    marginRight: matchesSM ? "1em" : 0,
                    maxWidth: matchesSM ? "30em" : undefined,
                  }}
                  align={matchesSM ? "center" : undefined}
                >
                  <Typography
                    variant="body1"
                    style={{ color: "#fff" }}
                    paragraph
                  >
                    React.js, Next.js, Javascript, Material UI, CSS and HTML are
                    my current technologies of choice.
                  </Typography>
                  <Typography
                    paragraph
                    variant="body1"
                    style={{ color: "#fff" }}
                  >
                    I am familiar with Redux, Node.js, Express.js and
                    <span className={classes.specialText}>
                      {" "}
                      can quickly learn any tech that is right for the task at
                      hand.
                    </span>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                style={{ marginLeft: matchesSM ? 0 : "5em" }}
                align={matchesSM ? "center" : undefined}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButtonPurple}
                  component={Link}
                  href="/about"
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  Learn More
                  <img
                    src="/assets/rightArrowWhite.svg"
                    alt="right arrow white"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              align={matchesSM ? "center" : undefined}
              style={{ marginTop: matchesSM ? "1em" : 0 }}
            >
              <img
                src="/assets/tech.svg"
                alt="technology stack"
                className={classes.infoIcon}
                style={{ marginLeft: matchesSM ? 0 : "2em" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.infoContainer}
          >
            {/* ----- Approach to Technology Block ----- */}
            <Grid
              item
              md
              container
              direction="column"
              style={{ marginTop: "5em" }}
            >
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : "5em",
                }}
                align={matchesSM ? "center" : "right"}
              >
                <Typography
                  variant="h3"
                  paragraph
                  style={{ color: theme.palette.common.orange }}
                >
                  Approach to Technology
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent={matchesSM ? "center" : undefined}
                alignItems={matchesSM ? "center" : undefined}
              >
                <Grid
                  item
                  align={matchesSM ? "center" : "right"}
                  style={{
                    marginLeft: matchesSM ? "1em" : "5em",
                    marginRight: matchesSM ? "1em" : 0,
                    maxWidth: matchesSM ? "30em" : undefined,
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{ color: "#fff" }}
                    paragraph
                  >
                    I believe that technology should make business practices
                    easier, not harder.
                  </Typography>
                  <Typography
                    paragraph
                    variant="body1"
                    style={{ color: "#fff" }}
                  >
                    Having a long-term vision when solving current problems
                    leads
                    <span className={classes.specialText}>
                      {" "}
                      to better technogical solutions.
                    </span>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item align={matchesSM ? "center" : "right"}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButtonPurple}
                  component={Link}
                  href="/about"
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  Learn More
                  <img
                    src="/assets/rightArrowWhite.svg"
                    alt="right arrow white"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              style={{
                marginTop: matchesSM ? "1em" : "5em",
                marginRight: matchesSM ? 0 : "5em",
              }}
              align={matchesSM ? "center" : "left"}
            >
              <img
                src="/assets/graph.svg"
                alt="graph"
                className={classes.infoIcon}
                style={{ marginLeft: matchesSM ? 0 : "2em" }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            className={classes.infoContainer}
          >
            {/* ----- Business Background Block ----- */}
            <Grid
              item
              md
              container
              direction="column"
              style={{ marginTop: "5em" }}
            >
              <Grid
                item
                style={{
                  marginLeft: matchesSM ? 0 : "5em",
                }}
                align={matchesSM ? "center" : undefined}
              >
                <Typography
                  variant="h3"
                  paragraph
                  style={{ color: theme.palette.common.orange }}
                >
                  Business Background
                </Typography>
              </Grid>
              <Grid
                container
                direction="column"
                justifyContent={matchesSM ? "center" : undefined}
                alignItems={matchesSM ? "center" : undefined}
              >
                <Grid
                  item
                  style={{
                    marginLeft: matchesSM ? "1em" : "5em",
                    marginRight: matchesSM ? "1em" : 0,
                    maxWidth: matchesSM ? "30em" : undefined,
                  }}
                  align={matchesSM ? "center" : undefined}
                >
                  <Typography
                    variant="body1"
                    style={{ color: "#fff" }}
                    paragraph
                  >
                    First Class (Hons) Business with Economics Degree.
                  </Typography>
                  <Typography
                    paragraph
                    variant="body1"
                    style={{ color: "#fff" }}
                  >
                    My understanding of businesses allows me to develop
                    <span className={classes.specialText}>
                      {" "}
                      better technologies for businesses.
                    </span>
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                style={{ marginLeft: matchesSM ? 0 : "5em" }}
                align={matchesSM ? "center" : undefined}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.learnButtonPurple}
                  component={Link}
                  href="/about"
                  onClick={() => {
                    setValue(1);
                  }}
                >
                  Learn More
                  <img
                    src="/assets/rightArrowWhite.svg"
                    alt="right arrow white"
                    className={classes.rightArrow}
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              md
              style={{
                marginTop: matchesSM ? "1em" : "5em",
              }}
              align={matchesSM ? "center" : undefined}
            >
              <img
                src="/assets/graduate.svg"
                alt="graduation hat"
                className={classes.infoIcon}
                style={{ marginLeft: matchesSM ? 0 : "2em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <ContactCard setValue={setValue} />
        <Dialog
          style={{ zIndex: 1302 }}
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullScreen
        >
          {projectType === "web" ? (
            <ProjectDialog info={project} setDialogOpen={setDialogOpen} />
          ) : projectType === "api" ? (
            <APIProjectDialog info={project} setDialogOpen={setDialogOpen} />
          ) : null}
        </Dialog>
      </Grid>
    </Grid>
  );
}
