import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./NewsCard.module.css";

const NewsCard = (props) => {
    const { title, score, author, date, id, descendants } = props;
    const newDate = new Date(date * 1000);

    return (
        <li className={styles.card}>
            <Link to={`/article/${id}`}>
                <article className={styles.article}>
                    <p>by {author}</p>
                    <h2 className={styles.title}>{title}</h2>
                    <time>{newDate.toDateString()}</time>
                    <p>Rating: {score}</p>
                    {descendants ? <p>Comments: {descendants}</p> : null}
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
    descendants: PropTypes.number
};

export default NewsCard;
