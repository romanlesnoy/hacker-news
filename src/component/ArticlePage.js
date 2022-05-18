import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ArticlePage.module.css";
import Article from "./Article";
import Preloader from "./Preloader";
import Button from "./Button";
import { newsActions } from "../store/news-slice";
import { fetchStory } from "../store/news-actions";

const ArticlePage = () => {
    const history = useHistory();
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
                <Button onClick={() => history.goBack()} text={"Back"} />
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
