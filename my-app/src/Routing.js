import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPage from "./Components/Shop/shopListPage";
import TooColdDefault from "./Components/Shop/shopListPage";
import loaderPage from "./Components/Product/productPage";
import iceCreamResults from "./Components/Shop/shopPage";

const Router = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/too-cold" exact component={TooColdDefault} />
        <Route path="/search" exact component={loaderPage} />
        <Route path="/found-icecream" exact component={iceCreamResults} />

        <Route exact path="/" render={() => <Redirect to="/" />} />
    </Switch>
);

export default Router;
