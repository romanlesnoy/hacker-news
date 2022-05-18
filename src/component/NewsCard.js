import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./NewsCard.module.css";

const NewsCard = (props) => {
    const { title, score, author, date, id, comments } = props;
    const newDate = new Date(date * 1000);

    return (
        <li className={styles.card}>
            <Link to={`/article/${id}`}>
                <article className={styles.article}>
                    <p>by {author}</p>
                    <h2 className={styles.title}>{title}</h2>
                    <time>{newDate.toDateString()}</time>
                    <p>Rating: {score}</p>
                    {comments && <p>Comments: {comments.length}</p>}
                </article>
            </Link>
        </li>
    );
};

NewsCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    score: PropTypes.number,
    author: PropTypes.string,
    date: PropTypes.number,
    comments: PropTypes.array
};

export default NewsCard;
