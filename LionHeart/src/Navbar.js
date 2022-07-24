import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <HomeRoundedIcon></HomeRoundedIcon>
        <ExploreRoundedIcon></ExploreRoundedIcon>
        <ChatBubbleRoundedIcon></ChatBubbleRoundedIcon>
        <MenuRoundedIcon></MenuRoundedIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
