import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import { IndexNavbar } from "../components/Navbars/IndexNavbar";
import { Index } from "../views/Index";

export const AppRouter = () => {
  return (
    <Router>
      <IndexNavbar />
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
      </Switch>
    </Router>
  );
};
