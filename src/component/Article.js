import React from "react";
import PropTypes from "prop-types";

const Article = ({ article }) => {
    const newDate = new Date(article.time * 1000);

    return (
        <article>
            <h2>{article.title}</h2>
            <p>by {article.by}</p>
            <p>{article.rating}</p>
            <p>{newDate.toString()}</p>
            {article.text && <p>{article.text}</p>}
            {article.url && <a href={article.url}>Link</a>}
        </article>
    );
};

Article.propTypes = {
    article: PropTypes.object,
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    by: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.number,
    comments: PropTypes.array
};

export default Article;
