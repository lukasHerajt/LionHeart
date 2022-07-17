import React from "react";
import { withStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRight";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import "./AppOB2.css";
import logo from "./logo.png";

const styles = {
  root: {
    "& .MuiButton-textPrimary": {
      position: "fixed",
      left: "30px",
      top: "130px",
      color: "#4d68ee",
      transform: "scale(1.8)",
    },
    "& .MuiOutlinedInput-input": {
      padding: "14px 31px",
    },
    "& .MuiSvgIcon-colorPrimary": {
      fill: "#A7B5F9",
      fontSize: "60px",
    },

    "&:hover": {
      fill: "#4d68ee",
    },
  },
};

function AppOB2({ classes, userSubmitted }) {
  const appSignup = (event) => {
    event.preventDefault(); // TODO: lookupmeaning
    userSubmitted("app-onboarding3");
  };

  const back2 = (event) => {
    event.preventDefault();
    userSubmitted("back2");
  };

  return (
    <div className={classes.root}>
      <img className="Logo" src={logo} alt="Logo" />
      <Button
        className="backbutton"
        startIcon={<ArrowBackIcon />}
        onClick={back2}
        color="primary"
        fontSize="large"
      ></Button>
      <div className="body">
        <header className="appsub-header">
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
            label="Date of Birth"
            variant="outlined"
            color="primary"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Timezone</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Timezone"
            >
              <div>
                <MenuItem value={10}>Eastern</MenuItem>
              </div>
              <div>
                <MenuItem value={20}>Central</MenuItem>
              </div>
              <div>
                <MenuItem value={30}>Mountain</MenuItem>
              </div>
              <div>
                <MenuItem value={30}>Pacific</MenuItem>
              </div>
            </Select>
          </FormControl>
          <IconButton onClick={appSignup}>
            <ArrowCircleRightTwoToneIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(AppOB2);
