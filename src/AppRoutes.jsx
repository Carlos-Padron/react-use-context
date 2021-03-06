import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import Navbar from "./Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
