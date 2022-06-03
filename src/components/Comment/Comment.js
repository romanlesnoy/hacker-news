import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "./Comment.module.css";
import { fetchSubComments } from "../../store/news-actions";
import CommentsList from "../../components/CommentList/CommentsList";
import dateConverter from "../../helpers/dateConverter";

const Comment = ({ item }) => {
    const { by, id, kids, text, time, dead, deleted } = item;
    const date = dateConverter(time);

    const dispatch = useDispatch();
    const subComments = useSelector((state) => state.news.subComments);
    const hasSubComments = useSelector((state) => state.news.hasSubComments);

    const [subCommentsIsVisible, setSubCommentsIsVisible] = useState(false);

    useEffect(() => {
        if (kids) {
            dispatch(fetchSubComments(kids));
        }
    }, [dispatch, kids]);

    const showSubComments = () => {
        setSubCommentsIsVisible(!subCommentsIsVisible);
    };

    const filtredSubComments = subComments.filter((item) => item.parent === id);

    const commentDeadContent = dead ? (
        <p className={styles.noComment}>Comment is dead</p>
    ) : null;

    const commentDeletedContent = deleted ? (
        <p className={styles.noComment}>Comment is deleted</p>
    ) : null;

    const showSubCommentsClass = subCommentsIsVisible
        ? styles.subCommentsVisible
        : styles.subCommentsHidden;

    return (
        <React.Fragment>
            <article className={styles.article}>
                <div className="details">
                    <span>by {by}</span>&nbsp;|&nbsp;
                    <time>posted on {date}</time>
                </div>

                {text && (
                    <p
                        dangerouslySetInnerHTML={{ __html: text }}
                        className={styles.text}
                    />
                )}

                {commentDeadContent}

                {commentDeletedContent}

                {kids && (
                    <button className={styles.button} onClick={showSubComments}>
                        Show More... {subCommentsIsVisible ? "[-]" : "[+]"}
                    </button>
                )}
            </article>

            {kids && hasSubComments && (
                <div className={showSubCommentsClass}>
                    <CommentsList comments={filtredSubComments} />
                </div>
            )}
        </React.Fragment>
    );
};

Comment.propTypes = {
    item: PropTypes.object,
    by: PropTypes.string,
    id: PropTypes.number,
    kids: PropTypes.array,
    parent: PropTypes.number,
    text: PropTypes.string,
    time: PropTypes.number,
    dead: PropTypes.bool,
    deleted: PropTypes.bool
};

export default Comment;
