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
// import AddIcon from "@mui/icons-material/Add";
import logo from "./logo.png";
import "./AppOB4.css";

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
    "& .MuiSvgIcon-fontSizeLarge": {
      fill: "#A7B5F9",
      fontSize: "60px",
      position: "absolute",
      top: "0px",
    },
    "& .MuiButtonBase-root MuiIconButton-root": {
      fill: "#A7B5F9",
      fontSize: "60px",
      position: "absolute",
      top: "170px",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      "& svg": {
        fill: "#A7B5F9",
      },
    },
    "& .MuiTextField-root": {
      position: "relative",
      top: "25px",
    },
    "& #nextBtn4": {
      paddingTop: "36px",
      textAlign: "center",
    },
    "& #aval": {
      textAlign: "center",
      padding: "0px 10px 0px 10px",
      width: "358px",
    },
    "& #hours": {
      position: "relative",
      bottom: "30px",
    },
    "& #days": {
      position: "relative",
      right: "29px",
    },
    "& #HOA": {
      position: "relative",
      right: "80px",
      top: "24px",
    },
    "& #enterHours": {
      position: "relative",
      left: "36px",
      top: "24px",
      width: "95px",
      height: "95px",
    },
  },
};

function AppOB4({ classes, userSubmitted }) {
  const appSignup = (event) => {
    event.preventDefault(); // TODO: lookupmeaning
    userSubmitted("");
  };
  console.log("in app onboard 444");
  const back4 = (event) => {
    event.preventDefault();
    userSubmitted("back4");
  };

  const skills = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className={classes.root}>
      <img className="Logo" src={logo} alt="Logo" />
      <Button
        className="backbutton"
        startIcon={<ArrowBackIcon />}
        onClick={back4}
        color="primary"
        fontSize="large"
      ></Button>
      <div className="body">
        <header className="appheader">
          <h1>Availability</h1>
        </header>
        <header className="subheader"></header>
        <body>
          <div id="days">
            {skills.map((val) => {
              return (
                <div className="focus" key={val}>
                  <FormControlLabel
                    labelPlacement="start"
                    control={
                      <Checkbox
                        className="checkBox"
                        icon={<Circle fontSize="medium" />}
                        checkedIcon={
                          <CircleCheckedFilled className="checkBox" />
                        }
                      />
                    }
                    label={val}
                  ></FormControlLabel>
                </div>
              );
            })}
          </div>
          <div className="aval" id="aval">
            <div id="hours">
              <p2 id="HOA">Hours of availability</p2>
              <FormControlLabel
                labelPlacement="start"
                control={
                  <div id="enterHours">
                    <TextField
                      type="number"
                      label="Enter hours"
                      InputLabelProps={{ shrink: true }}
                    ></TextField>
                  </div>
                }
              />
            </div>
            <div>
              <FormControlLabel
                labelPlacement="start"
                control={
                  <TextField
                    size="small"
                    className="startDate"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    label="Earliest start date"
                  />
                }
              ></FormControlLabel>
            </div>
          </div>
          <div id="nextBtn4">
            <IconButton onClick={appSignup}>
              <ArrowCircleRightTwoToneIcon color="primary" fontSize="large" />
            </IconButton>
          </div>
        </body>
      </div>
    </div>
  );
}

export default withStyles(styles)(AppOB4);
