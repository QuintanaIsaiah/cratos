import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Inicio from "./Inicio/index";
import Login from "./Inicio/Login";
import Register from "./Inicio/Register";
import Main from "./Main/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;