import React from "react";
import { Route } from "react-router-dom";

import MainPage from "./component/MainPage";
import ArticlePage from "./component/ArticlePage";
import NotFound from "./component/NotFound";
import { Switch } from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>

                <Route exact path="/article/:id">
                    <ArticlePage />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
