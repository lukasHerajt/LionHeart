import React from "react";
import { withStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRight";
import IconButton from "@material-ui/core/IconButton";
import "./AppOB2.css";
import logo from "./logo.png";

const styles = {
  root: {
    "& .MuiOutlinedInput-input": {
      padding: "16.5px 14px",
    },
    "& .MuiSvgIcon-colorPrimary": {
      fill: "#A7B5F9",
      fontSize: "80px",

      "&:hover": {
        fill: "#4d68ee",
      },
    },
  },
};

function AppOB2({ classes }) {
  return (
    <div className={classes.root}>
      <img className="Logo" src={logo} alt="Logo" />
      <div className="body">
        <header className="header">
          <h2>Personal Information</h2>
        </header>
        <div className="form">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            color="primary"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            color="primary"
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="tel"
            color="primary"
          />
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            color="primary"
            type="date"
          />
          <IconButton>
            <ArrowCircleRightTwoToneIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(AppOB2);
