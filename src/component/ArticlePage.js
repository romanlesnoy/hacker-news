import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ArticlePage.module.css";
import Article from "./Article";
import Preloader from "./Preloader";
import { newsActions } from "../store/news-slice";
import { fetchStory } from "../store/news-actions";

const ArticlePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const stories = useSelector((state) => state.news.news);
    const hasArticle = useSelector((state) => state.news.hasArticle);
    const isLoading = useSelector((state) => state.news.isLoading);
    const findStory = stories.find((item) => item.id === Number(id));

    useEffect(() => {
        if (findStory) {
            dispatch(newsActions.addArticle(findStory));
        } else {
            dispatch(fetchStory(id));
        }
    }, [findStory, dispatch, id]);

    return (
        <React.Fragment>
            <header className={styles.header}>
                <button className={styles.button}> Back </button>
            </header>
            <main>
                {isLoading && !hasArticle && <Preloader />}
                {!isLoading && hasArticle && (
                    <div>
                        <Article />
                        <p>Comment section</p>
                    </div>
                )}
            </main>
        </React.Fragment>
    );
};

export default ArticlePage;
