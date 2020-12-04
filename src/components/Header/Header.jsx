import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">

      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="arrow" />
        </IconButton>
      ) : (
          <IconButton>
            <PersonIcon className="header-icon" fontSize="large" />
          </IconButton>
        )}

      <Link to="/perfil">

      </Link>
      <img className="header-logo" src={logo} alt="banginder" />
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
