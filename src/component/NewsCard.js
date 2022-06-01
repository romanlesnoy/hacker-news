import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./NewsCard.module.css";
import dateConverter from "../helpers/dateConverter";

const NewsCard = (props) => {
    const { title, score, author, time, id, descendants } = props;
    const date = dateConverter(time);

    return (
        <li className={styles.card}>
            <Link to={`/article/${id}`}>
                <article className={styles.article}>
                    <p>by {author}</p>
                    <h2 className={styles.title}>{title}</h2>
                    <time>{date}</time>
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
    time: PropTypes.number,
    descendants: PropTypes.number
};

export default NewsCard;
