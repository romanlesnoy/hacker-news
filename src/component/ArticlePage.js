import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { newsActions } from "../store/news-slice";
import Article from "./Article";
import styles from "./ArticlePage.module.css";

const ArticlePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const stories = useSelector((state) => state.news.news);
    const hasArticle = useSelector((state) => state.news.hasArticle);
    const findStory = stories.find((item) => item.id === Number(id));

    useEffect(() => {
        if (findStory) {
            dispatch(newsActions.addArticle(findStory));
        }
    }, [findStory, dispatch]);

    return (
        <React.Fragment>
            <header className={styles.header}>
                <button className={styles.button}> Back </button>
            </header>
            <main>
                {hasArticle && <Article />}
                <p>Comment section</p>
            </main>
        </React.Fragment>
    );
};

export default ArticlePage;
