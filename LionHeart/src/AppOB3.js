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
      // color: "#A7B5F9",
      position: "absolute",
      right: "0",
      "& svg": {
        fill: "#D9DBE9",
      },
    },
    "& .MuiSvgIcon-fontSizeLarge": {
      fill: "#A7B5F9",
      fontSize: "60px",
    },
    "& .MuiButtonBase-root MuiIconButton-root": {
      fill: "#A7B5F9",
      fontSize: "60px",
      position: "absolute",
      top: "170px",

      "&:hover": {
        backgroundColor: "rgb(167 181 249 / 20%)",
      },
    },
    "& ..MuiIconButton-root:hover": {
      fill: "#A7B5F9",
      fontSize: "60px",
      position: "absolute",
      top: "170px",

      "&:hover": {
        backgroundColor: "rgb(167 181 249 / 20%)",
      },
    },
    "& .MuiSvgIcon-colorPrimary": {
      fill: "#A7B5F9",
      fontSize: "60px",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      "& svg": {
        fill: "#A7B5F9",
      },
    },
    "& #addButton": {
      textAlign: "center",
      top: "452px",
      left: "280px",
    },
    "& .textBox": {
      top: "16px",
      width: "280px",
    },
    "& #nextBtn3": {
      paddingTop: "36px",
      textAlign: "center",
    },
    "& .addSkills": {
      paddingTop: "26px",
    },
    "& .MuiFormControlLabel-label": {
      position: "relative",
      right: "26px",
    },
  },
};

function AppOB3({ classes, userSubmitted }) {
  const appSignup = (event) => {
    event.preventDefault(); // TODO: lookupmeaning
    userSubmitted("app-onboarding4");
  };
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
        className="backButton"
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
          <div>
            <div className="addSkills">
              Don't see your skills? Type them here!
            </div>
            <TextField
              size="small"
              label="Enter your skill"
              className="textBox"
            />
            <Button
              id="addButton"
              startIcon={<AddIcon />}
              onClick="{}"
              color="primary"
              fontSize="small"
            ></Button>
          </div>
          <div id="nextBtn3">
            <IconButton onClick={appSignup}>
              <ArrowCircleRightTwoToneIcon color="primary" fontSize="large" />
            </IconButton>
          </div>
        </body>
      </div>
    </div>
  );
}

export default withStyles(styles)(AppOB3);
