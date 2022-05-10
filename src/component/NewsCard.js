import React from "react";
import PropTypes from "prop-types";

const NewsCard = (props) => {
    const { title, rating, author, date, url } = props;
    const newDate = new Date(date * 1000);

    return (
        <li>
            <article>
                <h2>{title}</h2>
                <p>by {author}</p>
                <p>{rating}</p>
                <p>{newDate.toDateString()}</p>
                <a href={url}>Link</a>
            </article>
        </li>
    );
};

NewsCard.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    author: PropTypes.string,
    date: PropTypes.number,
    url: PropTypes.string
};

export default NewsCard;
