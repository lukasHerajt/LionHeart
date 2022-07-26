import React from "react";
import { withStyles } from "@mui/styles";
import { IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const styles = {
  root: {
    "& .appBar": {
      position: "fixed",
      backgroundColor: "#ffffff",
      alignItems: "center",
    },

    "& .toolBar": {
      position: "fixed",
      bottom: "0px",
    },

    "& .toolBar .MuiIconButton-label": {
      color: "#A7B5F9",
      display: "flex",
      flexDirection: "column",
      padding: "0px 96px 0px 96px",
      fontSize: "medium",
    },
  },
};

const Navbar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar className="appBar">
        <Toolbar className="toolBar">
          <IconButton>
            <HomeRoundedIcon />
            <div>Home</div>
          </IconButton>
          <IconButton>
            <ExploreRoundedIcon />
            <div>Explore</div>
          </IconButton>
          <IconButton>
            <ChatBubbleRoundedIcon />
            <div>Chat</div>
          </IconButton>
          <IconButton>
            <MenuRoundedIcon />
            <div>Menu</div>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
