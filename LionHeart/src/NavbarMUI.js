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
            width: "100%",
        },
        "& .toolBar button": {
            width: "25%",
        },
        "& .toolBar .MuiIconButton-label": {
            color: "#A7B5F9",
            display: "flex",
            flexDirection: "column",
            fontSize: "medium",
        },
        "& .MuiIconButton-root": {
            "&:hover": {
                backgroundColor: "##ffffff00",
            },
            "&:focus": {
                boxShadow: "#5b6cba 7px -41px 0px -32px",
            },
        },
    },
};

const Navbar = ({ classes }) => {
    return (
        <div className={classes.root}>
            <AppBar className="appBar">
                <Toolbar className="toolBar">
                    <IconButton disableRipple>
                        <HomeRoundedIcon disableRipple />
                        <div>Home</div>
                    </IconButton>
                    <IconButton disableRipple>
                        <ExploreRoundedIcon disableRipple />
                        <div>Explore</div>
                    </IconButton>
                    <IconButton disableRipple>
                        <ChatBubbleRoundedIcon disableRipple />
                        <div>Chat</div>
                    </IconButton>
                    <IconButton disableRipple>
                        <MenuRoundedIcon disableRipple />
                        <div>Menu</div>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(Navbar);