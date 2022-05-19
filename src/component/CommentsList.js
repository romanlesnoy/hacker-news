import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import styles from "./CommentList.module.css";
import Comment from "./Comment";
import { fetchComments } from "../store/news-actions";

const CommentsList = () => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.news.comments);
    const article = useSelector((state) => state.news.article);
    const hasComments = useSelector((state) => state.news.hasComments);

    const { kids } = article;

    useEffect(() => {
        if (kids) {
            dispatch(fetchComments(kids));
        }
    }, [dispatch, kids]);

    return (
        <React.Fragment>
            {!hasComments && <p>No comments</p>}
            {hasComments && (
                <ul>
                    {comments.map((item) => (
                        <li key={item.id} className={styles.comment}>
                            <Comment item={item} />
                        </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    );
};

CommentsList.propTypes = {
    kids: PropTypes.array
};

export default CommentsList;
