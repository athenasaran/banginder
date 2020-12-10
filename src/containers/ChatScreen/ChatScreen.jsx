import React, { useState, useEffect} from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Header from "../../components/Header/Header";
import firebase from "firebase/app";

function ChatScreen(props) {
  const [input, setInput] = useState("");
  const userUid = localStorage.getItem("user_id");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const firestore = firebase.firestore();
    setLoading(true);
    firestore
      .collection("Hate")
      .doc(userUid)
      .collection("HateList")
      .doc()
      .get()
      .then((snap) => {
        const HateList = snap.docs.map((e) => {
          return {
            uid: e.id,
            message: e.data().message[0].text,
          };
        });
        setMessages(HateList);
        HateList.forEach((e) => {
          firestore
            .collection("Hate")
            .doc(e.uid)
            .collection("HateList")
            .doc(userUid)
            .get()
            .then((snap) => {
              const data = snap.data();
              console.log(data);
              setMessages(messages => [...messages, {
                  message: data?.message.text,
              }]);
            });
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => {
      setMessages([]);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <React.Fragment>
      <Header backButton="/chat" />
      <div className="chatScreen">
        {messages.map((message) =>
          message.uid ? (
            <div className="chatMessage">
              <Avatar
                className="avatar"
                alt={message.name}
                src={message.image}
              />
              <p className="message">{message.message}</p>
            </div>
          ) : (
            <div className="chatMessage">
              <p className="messageUser">{message.message}</p>
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
