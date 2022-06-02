import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/news-actions";
import { newsActions } from "../../store/news-slice";

import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";

let isInitial = true;

const MainPage = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.error.notification);

    useEffect(() => {
        if (isInitial) {
            dispatch(fetchNews());
            isInitial = false;
        }

        const interval = setInterval(() => {
            dispatch(fetchNews());
        }, 60000);

        dispatch(newsActions.resetArticle());

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <React.Fragment>
            <Header />
            <main>
                {notification && (
                    <ErrorNotification
                        status={notification.status}
                        title={notification.title}
                        message={notification.message}
                    />
                )}
                <NewsList />
            </main>
        </React.Fragment>
    );
};

export default MainPage;
