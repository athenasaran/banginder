import React, { Component } from 'react'
import logo from "../../assets/img/logo.png";
import "./Registrar.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class Registrar extends Component {


    render() {
        return (
            <div className="container">
                <img src={logo} alt="banginder" />
                <TextField className="input" type="text" id="standard-basic" label="Digite seu nome" />
                <TextField className="input" type="text" id="standard-basic" label="Digite seu email" />
                <TextField className="input" type="password" id="standard-basic" label="Digite sua senha" />
                <Button className="button" variant="outlined">
                    <Link className="link" to="/">Cadastrar</Link>
                </Button>

            </div>
        )
    }

}
export default Registrar;
