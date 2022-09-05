import React from "react";
import { withStyles } from "@mui/styles";
import NavbarMUI from "./NavbarMUI";
import "./AppHome.css";
import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  root: {
    "& .MuiButton-contained": {
      padding: "6px 111px",
      top: "8vh",
    },
    "& .MuiButton-containedPrimary": {
      backgroundColor: "#A7B5F9",
      "&:hover": {
        backgroundColor: "#4d68ee",
      },
    },
    "& .MuiButton-textPrimary": {
      position: "absolute",
      left: "7.25%",
      right: "58.7%",
      top: "32.81%",
      bottom: "64.06% ",
      "&:hover": {
        backgroundColor: "#a0a0a000",
      },
      "&:focus": {
        boxShadow: "#5b6cba 0px 36px 0px -18px",
      },
    },
    "& .MuiButton-textSecondary": {
      position: "absolute",
      left: "63.04%",
      right: "14.25%",
      top: "32.81%",
      bottom: "64.06% ",
      "&:hover": {
        backgroundColor: "#a0a0a000",
      },
      "&:focus": {
        boxShadow: "#5b6cba 0px 36px 0px -18px",
      },
    },

    "& .css-1d3f8j8-MuiButtonBase-root-MuiButton-root": {
      fontSize: "25px",
      textTransform: "unset",
    },
    "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      fontSize: "25px",
      textTransform: "unset",
    },
  },
};
const AppHome = ({ classes, userSubmitted }) => {
  const appSignup = (event) => {
    event.preventDefault(); // TODO: lookupmeaning
    userSubmitted("");
  };

  return (
    // <meta name="viewport" content="width=device-width">
    <div className={classes.root}>
      <div>
        <Button disableRipple variant="text">
          Scheduled Sessions
        </Button>
        <Button disableRipple variant="text" color="secondary">
          Post Sessions
        </Button>
        <div class=" box position-absolute top-50 start-50 translate-middle">
          <div class="card-header">Monday, Februrary 14th</div>
          <div class="card-body">
            <h5 class="card-title">2:30 pm - 3:30 pm</h5>
            <p class="card-text">Fogg’s Behavioral Model for UX/UI</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        {/* <div className="box">
          <p>Monday, Februrary 14th</p>
          <p>2:30 pm - 3:30 pm</p>
          <h4>Fogg’s Behavioral Model for UX/UI</h4>
          <div className="users">
            <div>
              <p>3 Collaborators</p>
            </div>
            <div>
              <p>Hosted by:</p>
            </div>
          </div> */}
        {/* <div className="ButtonText">
          <Button
            onClick={appSignup}
            className="ButtonText"
            variant="contained"
          >
            <div>Veiw Session</div>
          </Button>
        </div> */}
      </div>
      <div>
        <NavbarMUI />
      </div>
    </div>
    // </div>
    // </meta>
  );
};

export default withStyles(styles)(AppHome);
