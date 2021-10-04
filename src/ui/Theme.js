import { createTheme } from "@material-ui/core/styles";

const jayPurple = "#7952B3";
const jayOrange = "#FFC107";

export default createTheme({
  palette: {
    primary: {
      main: jayPurple,
    },
    secondary: {
      main: jayOrange,
    },
    common: {
      purple: jayPurple,
      orange: jayOrange,
    },
  },
  typography: {
    h1: {
      fontFamily: "Josefin Sans",
      fontWeight: 800,
      fontSize: "2.5rem",
      color: jayPurple,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: "Josefin Sans",
      fontWeight: 800,
      fontSize: "1.75rem",
      color: jayPurple,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Josefin Sans",
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.5,
      color: jayPurple,
    },
    h4: {
      fontFamily: "Josefin Sans",
      fontWeight: 300,
      textTransform: "uppercase",
      fontSize: "1.5rem",
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: "Caveat Brush",
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.5,
    },
    tabs: {
      fontFamily: "Josefin Sans",
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    projectsButton: {
      fontFamily: "Josefin Sans",
      fontWeight: 500,
      fontSize: "1.25rem",
      textTransform: "uppercase",
      color: jayOrange,
    },
    subtitle1: {
      fontFamily: "Josefin Sans",
      fontWeight: 400,
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: "Josefin Sans",
      fontWeight: 400,
      fontSize: "1.25rem",
    },
    learnButton: {
      fontFamily: "Josefin Sans",
      fontWeight: 400,
      fontSize: "1rem",
      textTransform: "none",
      color: jayPurple,
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: "#fff",
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiInputLabel: {
      root: {
        color: jayPurple,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: jayPurple,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${jayPurple}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${jayOrange}`,
        },
      },
    },
  },
});
