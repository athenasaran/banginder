import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header-icon" fontSize="large" />
      </IconButton>

      <img className="header-logo" src={logo} alt="banginder" />
      <IconButton>
        <ForumIcon className="header-icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
