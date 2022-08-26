import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { newsActions } from "../../store/news-slice";
import Header from "../../components/Header/Header";
import NewsList from "../../components/NewsList/NewsList";
import ErrorNotification from "../../components/ErrorNotification/ErrorNotification";

const MainPage = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.error.notification);

    useEffect(() => {
        dispatch(newsActions.resetArticle());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Header />
            <main>
                {notification && (
                    <ErrorNotification
                        title={notification.title}
                        message={notification.message}
                    />
                )}
                {!notification && <NewsList />}
            </main>
        </React.Fragment>
    );
};

export default MainPage;
