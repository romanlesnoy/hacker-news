import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchNews } from "./store/news-actions";
import Header from "./component/Header";
import MainPage from "./component/MainPage";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Header />
            <MainPage />
        </React.Fragment>
    );
}

export default App;
