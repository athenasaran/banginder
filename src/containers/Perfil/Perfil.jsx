import Header from "../../components/Header/Header";
import firebase from "firebase/app";

import React, { useState, useEffect } from "react";
export default function Perfil(props) {
  const [profile, setProfile] = useState({
    url: "",
    name: "",
    likes: [],
    dislikes: [],
  });
  const userUid = localStorage.getItem("user_id");
  useEffect(() => {
    const firestore = firebase.firestore();

    firestore
      .collection("registerInfo")
      .doc(userUid)
      .get()
      .then((snap) => {
        const data = snap.data();
        setProfile((profile) => [
          {
            name: data.name + " " + data.surname,
            url: data.url,
            likes: data.likes,
            dislikes: data.dislikes,
          },
        ]);
      });

    return async () => {
      setProfile([]);
    };
  }, []);
  console.log(profile);
  return (
    <React.Fragment>
      <Header></Header>
    </React.Fragment>
  );
}
