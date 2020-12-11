import React, { useState, useEffect } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Header from "../../components/Header/Header";
import firebase from "firebase/app";

function ChatScreen(props) {
  const enemyId = window.location.href.split("/chat/")[1];
  const [input, setInput] = useState("");
  const userUid = localStorage.getItem("user_id");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [list, setList] = useState([]);

  function compare(a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    const firestore = firebase.firestore();
    setLoading(true);
    firestore
      .collection("Hate")
      .doc(userUid)
      .collection("HateList")
      .doc(enemyId)
      .get()
      .then((snap) => {
        const data = snap.data();
        setMessages(
          data.message.map((m) => {
            return { uid: enemyId, ...m };
          })
        );
        firestore
          .collection("Hate")
          .doc(enemyId)
          .collection("HateList")
          .doc(userUid)
          .get()
          .then((snap) => {
            const data = snap.data();
            if (data) setMessages((messages) => [...messages, ...data.message]);
          });
      });
    setMessages((messages) => messages.sort(compare));
    setLoading(false);
    return () => {
      setMessages([]);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firestore = firebase.firestore();
    const time = new Date();
    const obj = { text: input, date: `${time}` };
    setMessages([...messages, { message: input }]);
    firestore
      .collection("Hate")
      .doc(enemyId)
      .collection("HateList")
      .doc(userUid)
      .get()
      .then((snap) => {
        const data = snap.data();
        setList(data.message);
        firestore
          .collection("Hate")
          .doc(enemyId)
          .collection("HateList")
          .doc(userUid)
          .set({
            message: [obj, ...list],
          });
      })
      
    setInput("");
  };
  if (loading) {
    return <div>Carregando...</div>;
  }
  return (
    <React.Fragment>
      <Header backButton="/chat" />
      <div className="chatScreen">
        {messages.map((message) =>
          message.uid ? (
            <div className="chatMessage">
              <Avatar className="avatar" src={message.image} />
              <p className="message">{message.text}</p>
            </div>
          ) : (
            <div className="chatMessage">
              <p className="messageUser">{message.text}</p>
            </div>
          )
        )}

        <form className="enviarMensagens">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="texto"
            type="text"
            placeholder="Digite sua mensagem"
          />
          <button onClick={handleSubmit} type="submit" className="button">
            ENVIAR
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default ChatScreen;
