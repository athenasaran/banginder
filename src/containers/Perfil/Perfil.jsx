import Header from "../../components/Header/Header";
import firebase from "firebase/app";
import DeleteIcon from '@material-ui/icons/Delete';
import './Perfil.css'

import React, {useState, useEffect} from "react";
import TextField from "@material-ui/core/TextField";

function cardTaste(taste, listName) {
    return (
        <div className={"card-tastes"}>
            <h3>{listName}</h3>
            <div style={{overflowY: 'auto', height: '480px', marginTop: '5px'}}>
                {taste?.map(
                    (x) =>
                        <div className={"card-item"}>
                            <p>{x}</p>
                        </div>
                )}
            </div>
        </div>
    )
}

export default function Perfil(props) {
    const [profile, setProfile] = useState({
        url: "",
        name: "",
        bio: "",
        likes: [],
        dislikes: [],
    });


    useEffect(() => {
        const userUid = localStorage.getItem("user_id");
        const firestore = firebase.firestore();
        firestore
            .collection("registerInfo")
            .doc(userUid)
            .get()
            .then((snap) => {
                const data = snap.data();
                console.log(data);
                setProfile((profile) => {
                        return {
                            name: data.name + " " + data?.surname,
                            url: data.url,
                            bio: data.bio,
                            likes: data.likes,
                            dislikes: data.dislikes,
                        }
                    }
                );
            });

        return async () => {
            setProfile([]);
        };
    }, []);

    return (
        <React.Fragment>
            <Header/>
            <div className={"perfil"}>
                <div className={"user-head"}>
                    <img src={profile && profile.url} alt="" style={{width: '100px', height: '100px'}}/>
                    <div>
                        <h3>{profile && profile.name}</h3>
                        <div style={{height: '1rem'}}/>
                        <p>{profile.bio}</p>
                    </div>
                </div>
                <div className={"container-user"}>
                    <div className={"user-body"}>


                        {cardTaste(profile?.likes,"Gosto")}
                        {cardTaste(profile?.dislikes,"Ódio")}


                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}
