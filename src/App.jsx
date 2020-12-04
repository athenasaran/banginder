import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./containers/Login/Login";
import TinderCards from "./containers/TinderCard/TinderCards";
import Registrar from "./containers/Registrar/Registrar"
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import Chat from "./containers/Chat/Chat";
import ChatScreen from './containers/ChatScreen/ChatScreen'
function App() {
  return (
    <div className="App">

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
    </div>
  );
}

export default App;
