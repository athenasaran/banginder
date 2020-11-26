import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat aqui</h1>
          </Route>

          <Route path="/perfil">
            <h1>Perfil</h1>
          </Route>

          <Route path="/perfis">
            <TinderCards />
          </Route>

          <Route path="/">
            <h1>Login</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
