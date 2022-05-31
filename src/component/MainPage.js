import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../store/news-actions";

import Header from "./Header";
import NewsList from "./NewsList";

let isInitial = true;

const MainPage = () => {
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
            <Header />
            <main>
                <NewsList />
            </main>
        </React.Fragment>
    );
};

export default MainPage;
