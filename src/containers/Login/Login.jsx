import React, { Component } from 'react'
import logo from "../../assets/img/logo.png";
import "./Login.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    render() {
        return (
            <div className="container">
                <img src={logo} alt="banginder" />
                <TextField className="input" type="text" id="standard-basic" label="Digite seu email" />
                <TextField className="input" type="password" id="standard-basic" label="Digite sua senha" />
                <Button className="button" variant="outlined">Login</Button>
            </div>
        )
    }

}
export default Login;
