import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import {Link, useHistory} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {ExitToApp} from "@material-ui/icons";

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="banginder"/>


            <div className={"group-icons"}>
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="medium"/>
                </IconButton>

                <IconButton>
                    <PersonIcon fontSize="medium"/>
                </IconButton>


                <IconButton onclick={() => history.push("/chat")}>
                    <ForumIcon fontSize="medium"/>
                </IconButton>

                <IconButton onClick={() => history.replace(backButton)}>
                    <ExitToApp fontSize="medium"/>
                </IconButton>

            </div>
        </div>
    );
};

export default Header;
