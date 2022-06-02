import React from "react";
import PropTypes from "prop-types";

import dateConverter from "../../helpers/dateConverter";

const Article = ({ article }) => {
    const { title, rating, by, text, time, url } = article;
    const date = dateConverter(time);

    return (
        <article>
            <h2>{title}</h2>
            <p>by {by}</p>
            <p>{rating}</p>
            <p>{date}</p>
            {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
            {url && <a href={url}>Link</a>}
        </article>
    );
};

Article.propTypes = {
    article: PropTypes.object,
    title: PropTypes.string,
    rating: PropTypes.number,
    by: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.number,
    url: PropTypes.string
};

export default Article;
