import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPageContainer from "./component/LandingPage/LandingPageContainer";
import TooColdDefault from "./component/TooColdDefault";
// import loaderPage from "./Components/loaderPage";
import iceCreamResults from "./component/iceCreamResults/iceCreamResults";

const Router = () => (
    <Switch>
        <Route exact path="/" component={LandingPageContainer} />
        <Route path="/too-cold" exact component={TooColdDefault} />
        {/* <Route path="/search" exact component={loaderPage} /> */}
        <Route path="/found-icecream" exact component={iceCreamResults} />
        <Route exact path="/" render={() => <Redirect to="/" />} />
    </Switch>
);

export default Router;
