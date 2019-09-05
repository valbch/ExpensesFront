import React from "react";
import FormHome from "./FormHome";
// import Users from "./Users";
// import Expenses from "./Expenses";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// 1- afficher le formulaire, - ok
// 2- quand l'utilisateur clic, les données de l'utilisateurs sont
// envoyées dans la base de donnée en post - ok
// 3- Puis les 2 autres cases s'affiche sans changer de page - bof
// 4- la base de donnée envoi les infos à => users en get - ok
//                                        => expenses en get
// 5- calcul du total dans expenses
// 6- gestions des erreurs

// mes problemes:
// mettre une condition d'affichage quand l'utilisateur clic sur add la premiere fois
// dans le formulaire:
// => pouvoir selectionner en list new user ou un name
// => le refresh
// => retirer le place holder quand on ecrit

class App extends React.Component {
  render = () => {
    return (
      <div>
        <FormHome />
      </div>
    );
  };
}

export default App;
