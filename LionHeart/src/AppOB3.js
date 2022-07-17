import React from "react";
import { withStyles } from "@mui/styles";
// import { TextField } from "@mui/material";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import Circle from "@material-ui/icons/FiberManualRecord";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRight";
import AddIcon from "@mui/icons-material/Add";
import logo from "./logo.png";
import "./AppOB3";
import "./AppOB3.css";

const styles = {
  root: {
    "& .MuiButton-textPrimary": {
      position: "fixed",
      left: "30px",
      top: "130px",
      color: "#4d68ee",
      transform: "scale(1.8)",
    },
    "& .focus": {
      padding: "10px",
    },
    "& .checkBox": {
      color: "#A7B5F9",
      position: "absolute",
      right: "0",

      "&:hover": {
        backgroundColor: "rgba(167, 181, 249, 0.25)",
      },
      "& svg": {
        fill: "#D9DBE9",
      },
    },
    "& .MuiSvgIcon-colorPrimary": {
      fill: "#A7B5F9",
      fontSize: "60px",
      position: "absolute",
      top: "250px",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      "& svg": {
        fill: "#A7B5F9",
      },
    },
    "& .MuiTextField-root": {
      position: "absolute",
      top: "480px",
    },
  },
};

function AppOB3({ classes, userSubmitted }) {
  const appSignup = (event) => {
    event.preventDefault(); // TODO: lookupmeaning
    userSubmitted("app-onboarding");
  };
  console.log("in app onboard 333");
  const back3 = (event) => {
    event.preventDefault();
    userSubmitted("back3");
  };

  const skills = [
    "Digital Marketing",
    "UX/UI Design",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Open/Undecided",
  ];

  return (
    <div className={classes.root}>
      <img className="Logo" src={logo} alt="Logo" />
      <Button
        className="backbutton"
        startIcon={<ArrowBackIcon />}
        onClick={back3}
        color="primary"
        fontSize="large"
      ></Button>
      <div className="body">
        <header className="appheader">
          <h1>Choose your focus</h1>
        </header>
        <header className="subheader">
          <h5>We will use the choices to match you with companies</h5>
        </header>
        <body>
          {skills.map((val) => {
            return (
              <div className="focus">
                <FormControlLabel
                  labelPlacement="start"
                  control={
                    <Checkbox
                      className="checkBox"
                      icon={<Circle fontSize="medium" />}
                      checkedIcon={<CircleCheckedFilled className="checkBox" />}
                    />
                  }
                  label={val}
                ></FormControlLabel>
              </div>
            );
          })}
          {/* <footer className="f1">
            <f1>Don't see you skills? Type them here! </f1>
          </footer> */}
          <TextField
            size="small"
            label="Enter you skill"
            className="addSkills"
          />{" "}
          {/* <Button
            className="addbutton"
            startIcon={<AddIcon />}
            onClick="{}"
            color="primary"
            fontSize="small"
          ></Button> */}
          <IconButton onClick={appSignup}>
            <ArrowCircleRightTwoToneIcon color="primary" fontSize="large" />
          </IconButton>
        </body>
      </div>
    </div>
  );
}

export default withStyles(styles)(AppOB3);
