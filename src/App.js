import React from "react";
import FormHome from "./FormHome";
// import Users from "./Users";
// import Expenses from "./Expenses";
// import New from "./New";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// 1- afficher le formulaire, - ok
// 2- quand l'utilisateur clic, les données de l'utilisateurs sont
// envoyées dans la base de donnée en post.
// 3- Puis les 2 autres cases s'affiche sans changer de page
// 4- la base de donnée envoi les infos à users et à expenses en get

class App extends React.Component {
  render = () => {
    return (
      <div>
        <FormHome />
      </div>
    );
  };
}

// function App() {
//   return (
//     <Router>
//       <Route exact path="/" component={FormHome} />
//     </Router>
//   );
// }

export default App;
