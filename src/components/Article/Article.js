import React from "react";
import PropTypes from "prop-types";

import styles from "./Article.module.css";
import dateConverter from "../../helpers/dateConverter";

const Article = ({ article }) => {
    const { title, score, by, text, time, url, descendants } = article;
    const date = dateConverter(time);

    return (
        <article>
            <h2>{title}</h2>
            <div className={styles.details}>
                <span>by {by}</span>&nbsp;|&nbsp;
                <time>posted on{date}</time>&nbsp;|&nbsp;
                <span>Rating {score}</span>
                {descendants ? (
                    <span>&nbsp;|&nbsp;Comments: {descendants}</span>
                ) : null}
            </div>
            {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
            {url && (
                <p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                    </a>
                </p>
            )}
        </article>
    );
};

Article.propTypes = {
    article: PropTypes.object,
    title: PropTypes.string,
    score: PropTypes.number,
    by: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.number,
    url: PropTypes.string
};

export default Article;
