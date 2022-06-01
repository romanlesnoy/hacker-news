import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ArticlePage.module.css";
import Article from "./Article";
import CommentsList from "./CommentsList";
import Preloader from "./Preloader";
import Button from "./Button";
import { newsActions } from "../store/news-slice";
import { fetchStory } from "../store/news-actions";
import { fetchComments } from "../store/news-actions";

const ArticlePage = () => {
    const history = useHistory();
    const { id } = useParams();

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.news.isLoading);
    const stories = useSelector((state) => state.news.news);
    const findStory = stories.find((item) => item.id === Number(id));

    const article = useSelector((state) => state.news.article);
    const comments = useSelector((state) => state.news.comments);
    const hasArticle = useSelector((state) => state.news.hasArticle);

    const updateComments = () => {
        dispatch(fetchComments(article.kids));
    };

    useEffect(() => {
        if (findStory) {
            dispatch(newsActions.loadArticle(findStory));
        } else {
            dispatch(fetchStory(id));
        }
    }, [findStory, dispatch, id]);

    useEffect(() => {
        if (article.kids) {
            dispatch(fetchComments(article.kids));
        }
    }, [dispatch, article.kids]);

    return (
        <React.Fragment>
            <header className={styles.header}>
                <Button onClick={() => history.goBack()} text={"Back"} />
            </header>

            <main>
                {isLoading && !hasArticle && <Preloader />}

                {!isLoading && hasArticle && (
                    <div>
                        {article && <Article article={article} />}

                        {article.kids ? (
                            <>
                                <Button
                                    onClick={updateComments}
                                    text={"Update comments"}
                                />
                                <CommentsList comments={comments} />
                            </>
                        ) : (
                            <p>No comments</p>
                        )}
                    </div>
                )}
            </main>
        </React.Fragment>
    );
};

export default ArticlePage;
