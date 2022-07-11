import React from "react";
import { withStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import "./AppOnboarding.css";
import { Button } from "@mui/material";
import logo from "./logo.png";
import { useState } from "react";
// import { ReactDOM } from "react";

const styles = {
  root: {
    "& .MuiButton-contained": {
      padding: "6px 11px",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#A7B5F9",
      "&:hover": {
        backgroundColor: "#4d68ee",
      },
    },
    "& .MuiOutlinedInput-input": {
      main: "green",
      "&focus": {
        color: "green",
      },
    },
  },
};

function AppOnboarding({ classes, props, userSubmitted }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setpassword2] = useState("");

  const appSignup = (event) => {
    event.preventDefault(); // TODO: lookupmeaning
    userSubmitted("app-onboarding");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.userSubmitted(true);
    console.log(email, password, password2);
  };
  return (
    <div className={classes.root}>
      <img className="Logo" src={logo} alt="Logo" />
      <div className="body">
        <header className="appsub-header">
          <h3>Create Apprentice Account</h3>
        </header>
        <div className="form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            color="primary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Repeat password"
            variant="outlined"
            onChange={(e) => setpassword2(e.target.value)}
          />
          <Button onClick={appSignup} variant="contained" color="primary">
            Create Account
          </Button>
        </div>
        <footer className="appf1">
          <div>
            Already have an account?
            <span>
              {" "}
              <a href="/some/valid/uri">Log In</a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default withStyles(styles)(AppOnboarding);
