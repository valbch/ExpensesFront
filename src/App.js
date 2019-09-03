import React from "react";
import FormHome from "./FormHome";
// import Users from "./Users";
// import Expenses from "./Expenses";
// import New from "./New";
import { BrowserRouter as Router, Route } from "react-router-dom";
// 1- afficher le formulaire, - ok
// 2- quand l'utilisateur clic, les données de l'utilisateurs sont envoyées dans la base de donnée.
// 3- Puis la page avec les 3 cadres s'affiche
// 4- la base de donnée envoi les infos à users et à expenses

function App() {
  return (
    <Router>
      <Route exact path="/" component={FormHome} />
    </Router>
  );
}

export default App;
