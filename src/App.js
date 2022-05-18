import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { fetchNews } from "./store/news-actions";

import MainPage from "./component/MainPage";
import ArticlePage from "./component/ArticlePage";
import NotFound from "./component/NotFound";
import { Switch } from "react-router-dom";

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (isInitial) {
            dispatch(fetchNews());
            isInitial = false;
        }
        const interval = setInterval(() => {
            dispatch(fetchNews());
        }, 60000);

        return () => clearInterval(interval);
    }, [dispatch]);

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
