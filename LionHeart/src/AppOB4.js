import React from "react";
import { withStyles } from "@mui/styles";
// import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
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
  },
};

function AppOB3({ classes, userSubmitted }) {
  //   const appSignup = (event) => {
  //     event.preventDefault(); // TODO: lookupmeaning
  //     userSubmitted("app-onboarding");
  //   };
  console.log("in app onboard 333");
  const back3 = (event) => {
    event.preventDefault();
    userSubmitted("back3");
  };

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
        <header>
          <h5>We will use the choices to match you with companies</h5>
        </header>
        <body>
          <h5>Digital Marketing </h5>
          <Checkbox
            className="checkBox"
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
          <h5>UX/UI Design </h5>
          <Checkbox
            className="checkBox"
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
          <h5>Frontend Development </h5>
          <Checkbox
            className="checkBox"
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
          <h5>Backend Development </h5>
          <Checkbox
            className="checkBox"
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
          <h5>Full Stack Development </h5>
          <Checkbox
            className="checkBox"
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
          <h5>Open/Undecided </h5>
          <Checkbox
            className="checkBox"
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
          />
        </body>
      </div>
    </div>
  );
}

export default withStyles(styles)(AppOB3);
