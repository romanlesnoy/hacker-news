import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./NewsCard.module.css";
import dateConverter from "../../helpers/dateConverter";

const NewsCard = (props) => {
    const { title, score, author, time, id, descendants } = props;
    const date = dateConverter(time);

    return (
        <li className={styles.card}>
            <Link to={`/article/${id}`}>
                <article className={styles.article}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.details}>
                        <span>by {author}</span>&nbsp;
                        <time>posted on {date}</time>
                    </div>
                    <div className={styles.details}>
                        <span>Rating: {score}</span>&nbsp;|&nbsp;
                        {descendants ? (
                            <span>Comments: {descendants}</span>
                        ) : (
                            <span>No comments</span>
                        )}
                    </div>
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
    time: PropTypes.number,
    descendants: PropTypes.number
};

export default NewsCard;
