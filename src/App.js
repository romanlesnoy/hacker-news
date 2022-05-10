import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { fetchNews } from "./store/news-actions";

import MainPage from "./component/MainPage";
import ArticlePage from "./component/ArticlePage";
import NotFound from "./component/NotFound";
import { Switch } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>

                <Route path="/:id" exact component={ArticlePage} />

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default App;
