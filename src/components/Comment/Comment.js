import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styles from "./Comment.module.css";
import { fetchSubComments } from "../../store/news-actions";
import CommentsList from "../../components/CommentList/CommentsList";
import dateConverter from "../../helpers/dateConverter";

const Comment = ({ item }) => {
    const { by, id, kids, text, time } = item;
    const date = dateConverter(time);

    const dispatch = useDispatch();
    const subComments = useSelector((state) => state.news.subComments);
    const hasSubComments = useSelector((state) => state.news.hasSubComments);

    useEffect(() => {
        if (kids) {
            dispatch(fetchSubComments(kids));
        }
    }, [dispatch, kids]);

    const filtredSubComments = subComments.filter((item) => item.parent === id);

    return (
        <React.Fragment>
            <article>
                <div className={styles.details}>
                    <span>by {by}</span>&nbsp;|&nbsp;
                    <time>posted on{date}</time>
                </div>

                <p
                    dangerouslySetInnerHTML={{ __html: text }}
                    className={styles.text}
                />
            </article>
            {kids && hasSubComments && (
                <CommentsList comments={filtredSubComments} />
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
    time: PropTypes.number
};

export default Comment;
