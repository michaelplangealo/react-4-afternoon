import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import ClassList from "./components/ClassList/ClassList.js";
import Student from "./components/Student/Student.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/classlist/:class" component={ClassList} />
    <Route path="/student/:id" component={Student} />
  </Switch>
);
