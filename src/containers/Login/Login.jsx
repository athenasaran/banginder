import React, { Component } from "react";
import logo from "../../assets/img/logo.png";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = (e) => {
    const { email, password } = this.state;
    console.log(email);
    firebase.auth().signInWithEmailAndPassword(email, password);
  };

  handleChangeEmail = (event) => {
    console.log(event.target.value);
    this.setState({ email: event.target.value});
    console.log(this.state.email);
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value});
  };

  render() {
    return (
      <div className="container">
          <img src={logo} alt="banginder" />
          <TextField
            className="input"
            type="text"
            id="standard-basic"
            label="Digite seu email"
            onChange={this.handleChangeEmail}
          />
          <TextField
            className="input"
            type="password"
            id="standard-basic"
            label="Digite sua senha"
            onChange={this.handleChangePassword}
          />
          <Button
            className="button"
            variant="outlined"
            onClick={this.handleSubmit}
          >
              Login
            {/*<Link className="link" to="/perfis">Login</Link>*/}
          </Button>
          <Button className="button" variant="outlined">
            <Link className="link" to="/registrar">
              Registrar
            </Link>
          </Button>
      </div>
    );
  }
}
export default Login;
