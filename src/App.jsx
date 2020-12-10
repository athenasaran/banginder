import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./containers/Login/Login";
import TinderCards from "./containers/TinderCard/TinderCards";
import Registrar from "./containers/Registrar/Registrar"
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import Chat from "./containers/Chat/Chat";
import ChatScreen from './containers/ChatScreen/ChatScreen';
import firebase from "firebase";
import {FirebaseAuthProvider} from "@react-firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBrKw6x2SiTa511W3tBRNF1jtfkNXAljrY",
  authDomain: "banginder-59b1c.firebaseapp.com",
  databaseURL: "https://banginder-59b1c.firebaseio.com",
  projectId: "banginder-59b1c",
  storageBucket: "banginder-59b1c.appspot.com",
  messagingSenderId: "577753223059",
  appId: "1:577753223059:web:2355a8ad6f3bbc6e916266"
};
function App() {
  return (
    
    <div className="App">
      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        <Router>
          <Switch>

            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>

            <Route path="/chat">
              <Header backButton="/perfis" />
              <Chat />
            </Route>

            <Route path="/registrar">
              <Registrar />
            </Route>

            <Route path="/perfil">
              <h1>Perfil</h1>
            </Route>

            <Route path="/perfis">
              <Header />
              <TinderCards />
              <SwipeButtons />
            </Route>

            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </FirebaseAuthProvider>
    </div>
   
  );
}

export default App;
