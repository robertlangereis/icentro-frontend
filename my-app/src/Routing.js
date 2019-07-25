import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import LandingPage from "./Components/LandingPage";
import TooColdDefault from "./component/TooColdDefault";
// import loaderPage from "./Components/loaderPage";
// import iceCreamResults from "./Components/iceCreamResults";

const Router = () => (
    <Switch>
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route path="/" exact component={TooColdDefault} />
        {/* <Route path="/search" exact component={loaderPage} /> */}
        {/* <Route path="/found-icecream" exact component={iceCreamResults} /> */}
        <Route exact path="/" render={() => <Redirect to="/" />} />
    </Switch>
);

export default Router;
