import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./containers/Login/Login";
import TinderCards from "./containers/TinderCard/TinderCards";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat aqui</h1>
          </Route>

          <Route path="/perfil">
            <h1>Perfil</h1>
          </Route>

          <Route path="/perfis">
            <Header />
            <TinderCards />
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
