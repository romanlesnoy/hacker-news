import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Preloader from "./components/Preloader/Preloader";

const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
const ArticlePage = React.lazy(() => import("./pages/ArticlePage/ArticlePage"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

function App() {
    return (
        <React.Fragment>
            <Suspense fallback={<Preloader />}>
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
            </Suspense>
        </React.Fragment>
    );
}

export default App;
