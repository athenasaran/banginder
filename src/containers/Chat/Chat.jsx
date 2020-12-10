import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import "./Chat.css";
import ChatRow from "../../components/ChatRow/ChatRow";
import firebase from "firebase/app";

function Chat() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const userUid = localStorage.getItem("user_id");
  useEffect(() => {
    const firestore = firebase.firestore();
    setLoading(true);
    firestore
      .collection("Hate")
      .doc(userUid)
      .collection("HateList")
      .get()
      .then((snap) => {
          console.log(snap.docs[0].data());
        const HateList = snap.docs.map((e) => {return {
            uid: e.id,
            message: e.data().message[0].text,
        }});
        HateList.forEach((e) => {
          firestore
            .collection("registerInfo")
            .doc(e.uid)
            .get()
            .then((snap) => {
              const data = snap.data();
              setPeople((people) => [...people, {
                  name: data.name + " " + data.surname,
                  url: data.url,
                  uid: data.uid,
                  message: e.message,
              }]);
            });
        })
        setLoading(false);
      }).catch(() => setLoading(false));
      return () => {
        setPeople([])
      }
  }, []);

  if(loading) {
      return <div>Carregando...</div>
  }
  return (
    <React.Fragment>
      <Header backButton="/perfis" />
      <div className="chat">
          {people.map(p => <ChatRow
          key={p.uid}
          name={p.name}
          timestamp="algum tempo atrás atras"
          profilePic={p.url}
          message={p.message}
        />)}
        
      </div>
    </React.Fragment>
  );
}

export default Chat;
