import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ServantList from "./components/servant-list.component";
import CreateServant from "./components/create-servant.component";
import CreateUser from "./components/create-user.component";



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br/>
      <Route path="/" exact component={ServantList} />
      <Route path="/create" exact component={CreateServant} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
