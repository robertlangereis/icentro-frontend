import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LandingPageContainer from "./component/LandingPage/LandingPageContainer";
import TooColdDefault from "./component/TooColdDefault";
import SearchingContainer from "./component/Searching/SearchingContainer";
// import iceCreamResults from "./Components/iceCreamResults";

const Router = () => (
    <Switch>
        {/* <Route exact path="/" component={LandingPageContainer} /> */}
        {/* <Route path="/too-cold" exact component={TooColdDefault} /> */}
        <Route exact path="/" component={SearchingContainer} />
        {/* <Route path="/found-icecream" exact component={iceCreamResults} /> */}
        <Route exact path="/" render={() => <Redirect to="/" />} />
    </Switch>
);

export default Router;
