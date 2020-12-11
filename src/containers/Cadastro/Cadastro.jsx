import React, {useState} from "react";
import logo from "../../assets/img/logo.png";

import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import {useHistory} from "react-router-dom";

function Cadastro(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleSubmit = () => {
        console.log(email);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                if (user) {
                    localStorage.setItem("user_id", user.uid);
                    history.push("/registrar");
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + " - " + errorMessage);
            });
    };

    return (
        <div className={"login"}>
            <div className="container">
                <img src={logo} alt="banginder"/>
                <TextField
                    className="input"
                    type="text"
                    id="standard-basic"
                    label="Digite seu email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    className="input"
                    type="password"
                    id="standard-basic"
                    label="Digite sua senha"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button className="button" variant="outlined" onClick={handleSubmit}>
                    Cadastrar
                </Button>
                
            </div>
        </div>
    );
}

export default Cadastro;
