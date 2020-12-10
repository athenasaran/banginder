import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { isAuthenticated } from "./auth";
import Header from "./components/Header/Header";
import Login from "./containers/Login/Login";
import TinderCards from "./containers/TinderCard/TinderCards";
import Registrar from "./containers/Registrar/Registrar";
import Perfil from "./containers/Perfil/Perfil";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import Chat from "./containers/Chat/Chat";
import ChatScreen from "./containers/ChatScreen/ChatScreen";
import firebase from "firebase";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBrKw6x2SiTa511W3tBRNF1jtfkNXAljrY",
  authDomain: "banginder-59b1c.firebaseapp.com",
  databaseURL: "https://banginder-59b1c.firebaseio.com",
  projectId: "banginder-59b1c",
  storageBucket: "banginder-59b1c.appspot.com",
  messagingSenderId: "577753223059",
  appId: "1:577753223059:web:2355a8ad6f3bbc6e916266",
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log("Amigo estou aq!!!!!");
      if (isAuthenticated()) {
        return <Component {...props} />;
      } else {
        //setMessage("Você não está autenticado!");
        return (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      }
    }}
  />
);

function App() {
  return (
    <div className="App">
      <FirestoreProvider firebase={firebase} {...firebaseConfig}>
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
          <BrowserRouter>
            <Switch>
              <PrivateRoute exact path="/chat/:person" component={ChatScreen} />

              <PrivateRoute exact path="/chat" component={Chat} />

              <Route exact path="/registrar" component={Registrar} />

              <PrivateRoute path="/perfil" component={Perfil} />

              <PrivateRoute exact path="/perfis" component={TinderCards} />

              <Route path="/" component={Login} />
            </Switch>
          </BrowserRouter>
        </FirebaseAuthProvider>
      </FirestoreProvider>
    </div>
  );
}

export default App;
