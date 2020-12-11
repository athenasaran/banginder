import React, {Component, useState} from 'react'
import logo from "../../assets/img/logo.png";
import "./Registrar.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from "firebase/app";
import {useHistory} from "react-router-dom";


function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }


function cardTaste(label, taste, controller) {
    return (
        <div className={"card-tastes"}>
            <h3>{label}</h3>
            <div className={"add"}>
                    <TextField type="text" onBlur={(event)=> {
                        if(event.target.value.length > 0){
                            taste.push(event.target.value);
                            controller([...taste])
                        }
                        event.target.value=""
                    }} /> 
            </div>
            <div style={{overflowY: 'auto', height: '420px', marginTop: '5px'}}>
                {taste?.map(
                    (x, i) =>
                        <div className={"card-item"} key={i} >
                            <p>{x}</p>
                            <div className={"icons"}>
                                <IconButton onClick={()=>{controller([...removeItemOnce(taste, x)])}}>
                                    <DeleteIcon />
                                </IconButton>    
                            </div>
                        </div>
                )}
            </div>
        </div>
    )
}

const Registrar = () => {
    const history = useHistory()
    const [likes, setLikes] = useState([])
    const [dislikes, setDislikes] = useState([])
    const [name, setName] = useState([])
    const [bio, setBio] = useState([])

    const handleSubmit = () => {
        const userUid = localStorage.getItem("user_id");
        firebase.firestore()
          .collection("registerInfo")
          .doc(userUid)
          .set({
            likes: likes,
            dislikes: dislikes,
            name: name,
            bio: bio,
            url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
            surname: "",
            bDay: "07-03-1996"
          }).then(() => {
            history.push("/perfis");
          })
    }

    return (
        <div className={"register"}>

            <div className={" container-user"}>

                <div style={{display:"flex"}} className={"forms"}>
                        <TextField inputProps={{backgroundcolor:"white"}} type="text" label={"Nome"} onBlur={(event) => setName(event.target.value)}/>
                        <TextField type="text" label={"Biografia"} onBlur={(event) => setBio(event.target.value)}/>
                
                </div>

                <div className={"user-body"}>


                    {cardTaste("Gostos", likes, setLikes)}

                    {cardTaste("Odeios", dislikes, setDislikes)}

                </div>

                <div>
                    <button onClick={handleSubmit} className={"submit-button"}>
                        Save
                    </button>
                </div>

            </div>

        </div>

    )

}
export default Registrar;
