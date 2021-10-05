import React, { useState, useEffect } from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ContactCard from "../src/ui/ContactCard";

import { getTechStackIconsFull } from "../src/data/projectData";

const useStyles = makeStyles((theme) => ({
  downloadButton: {
    ...theme.typography.learnButton,
    borderRadius: 0,
    width: 150,
    height: 40,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.common.orange}`,
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
      color: theme.palette.common.orange,
    },
    fontWeight: 800,
    textTransform: "uppercase",
  },
  downloadIcon: {
    marginLeft: "1em",
    width: "1.5em",
  },
  sectionImage: {
    maxWidth: "30em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15em",
    },
  },
  icons: {
    height: "6em",
    marginLeft: "1em",
    marginRight: "1em",
  },
  aboutMeText: {
    fontWeight: 500,
    fontSize: "1.5rem",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: { marginRight: "1em", marginLeft: "1em" },
  },
}));

export default function About({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [techStackIcons, setTechStackIcons] = useState(null);

  useEffect(() => {
    setTechStackIcons(getTechStackIconsFull());
  }, []);

  return (
    <Grid
      item
      style={{
        marginTop: "3em",
      }}
    >
      <Grid container direction="column">
        <Head>
          <title key="title">
            About Me - Background & Tech Stack | Jay McKenzie
          </title>
          <meta
            name="description"
            key="description"
            content="Currently specialising in JavaScript, React, Material UI, NextJS, CSS and HTML. Check out my background and tech stack, and contact me to discuss opportunities."
          />
          <meta
            property="og:title"
            key="og:title"
            content="Front End Web Developer Portfolio | About Me"
          />
          <meta
            property="og:url"
            key="og:url"
            content="jaymckenzie.co.uk/about"
          />
          <link
            rel="canonical"
            key="canonical"
            href="https://jaymckenzie.co.uk/about"
          />
        </Head>
        <Grid
          item
          style={{ marginLeft: matchesMD ? 0 : "5em", marginBottom: "5em" }}
          align={matchesMD ? "center" : undefined}
        >
          {/* ----- Heading Section ----- */}
          <Grid item>
            <Typography variant="h1">About Me</Typography>
          </Grid>
          <Grid item align="center">
            <Typography variant="h5" className={classes.aboutMeText} paragraph>
              I am a Front End Web Developer from London, UK.
            </Typography>
          </Grid>
          <Grid item align="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.downloadButton}
              component={"a"}
              href="https://www.mediafire.com/file/7tyl0oz0qo9l8m1/JayMcKenzieCV_compressed.pdf/file"
              target="_blank"
              rel="noopener noreferrer"
            >
              cv
              <img
                src="/assets/download.svg"
                alt="download icon"
                className={classes.downloadIcon}
              />
            </Button>
          </Grid>
        </Grid>
        {/* ----- My Background Section ----- */}
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          style={{ paddingBottom: "5em" }}
        >
          <Grid
            item
            md
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item style={{ marginLeft: matchesMD ? 0 : "5em" }}>
              <Typography variant="h2">My Background</Typography>
            </Grid>
            <Grid
              item
              align={matchesMD ? "center" : undefined}
              style={{
                marginLeft: matchesMD ? "1em" : "5em",
                marginRight: matchesMD ? "1em" : "2em",
                maxWidth: "50em",
              }}
            >
              <Typography paragraph variant="body1">
                With a First Class (Hons) in Business with Economics, I have had
                a keen interest in business since I was a child and have grown
                an equally passionate interest in the use of technology in
                business operations.
              </Typography>
              <Typography paragraph variant="body1">
                As a self-taught developer, I have gained a solid grasp of
                JavaScript alongside Front-End tools incl. React and Material
                UI, whilst constantly developing my knowledge and tech stack.
              </Typography>
              <Typography paragraph variant="body1">
                For example I used Node.js to build a simple back-end for this
                portfolio in order to create an email service connected to my
                Contact Me page. I used expressJS to build a server, alongside
                cors, nodemailer and a few other npm packages to create the
                emailing service. I then hosted my server online using Heroku.
              </Typography>
              <Typography paragraph variant="body1">
                The more projects I create, the more I understand the need for a
                strong grasp on Data Structures and Algorithms - in order to
                develop technology that is scalable and is efficient - both in
                Time and Space (Big O), alongside giving me the knowledge on how
                to best structure and store data in order to match the desired
                functionality of the program. This has lead to me giving a lot
                of focus to this aspect of Computer Science and Programming.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md align="center">
            <img
              src="/assets/office.svg"
              alt="girl sitting at office desk"
              className={classes.sectionImage}
            />
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- Current Tech Stack Section ----- */}
          <Grid container direction="column">
            <Grid item align="center">
              <Typography variant="h2">Current Tech Stack</Typography>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              {techStackIcons &&
                techStackIcons.map((icon) => (
                  <Grid
                    item
                    key={icon.src}
                    style={{ marginBottom: matchesMD ? "1em" : 0 }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className={classes.icons}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
        {/* ----- My Approach to Technology Section ----- */}
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          alignItems="center"
          style={{ paddingBottom: "5em", paddingTop: "5em" }}
        >
          <Hidden smDown>
            <Grid item md align="center" style={{ marginBottom: "1em" }}>
              <img
                src="/assets/lightbulb.svg"
                alt="girl sitting next to huge light bulb"
                className={classes.sectionImage}
              />
            </Grid>
          </Hidden>
          <Grid
            item
            md
            container
            direction="column"
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid
              item
              align={matchesMD ? "center" : "right"}
              style={{
                marginLeft: matchesMD ? "1em" : 0,
                marginRight: matchesMD ? "1em" : "5em",
              }}
            >
              <Typography variant="h2">My Approach to Technology</Typography>
            </Grid>
            <Grid
              item
              align={matchesMD ? "center" : "right"}
              style={{
                marginLeft: matchesMD ? "1em" : 0,
                marginRight: matchesMD ? "1em" : "5em",
                maxWidth: "50em",
              }}
            >
              <Typography paragraph variant="body1">
                With technology advancing at an exponential rate, not only are
                the existing technologies developing, but new technologies are
                being created.
              </Typography>
              <Typography paragraph variant="body1">
                Therefore, instead of becoming dependent on and focused on any
                specific technology, I prefer to look at the current problem and
                then find the best technological solution to solve it, in a
                long-term, sustainable way.
              </Typography>
              <Typography paragraph variant="body1">
                For example, after learning and using CSS, SASS, Styled
                Components and Bootstrap in earlier projects, I researched
                Material UI and how useful it can be when developing React Web
                Applications, and so I extensively learnt how to utilise this
                Front-End React UI Library.
              </Typography>
              <Typography paragraph variant="body1">
                Jest is on my list of tech to learn next, as I understand the
                need for TDD and believe using Jest will give me the tools to
                implement this process into my development.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdUp>
            <Grid item md align="center">
              <img
                src="/assets/lightbulb.svg"
                alt="girl sitting next to huge light bulb"
                className={classes.sectionImage}
              />
            </Grid>
          </Hidden>
        </Grid>
        <ContactCard setValue={setValue} />
      </Grid>
    </Grid>
  );
}
