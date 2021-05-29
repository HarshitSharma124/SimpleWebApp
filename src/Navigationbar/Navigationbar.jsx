import "./Navigationbar.css";
import React from "react";
import Home from "../home/index";
import Experiments from "../Experiments/index.js"
import {NavLink,BrowserRouter as Router,Route} from "react-router-dom";

function template() {
  return (
    <div className="navigationbar">
      <h1>navigationbar</h1>
      <Router basename="/hostproject">
      <NavLink  to="/src/home">Home</NavLink>
      <NavLink  to="/src/Experiments">Experiments</NavLink>
      <Route  exact path="/" component={Home}/>
      <Route  path="/src/home" component={Home}/>
      <Route  path="/src/Experiments" component={Experiments}/>

    </Router>


    </div>
  );
};

export default template;
