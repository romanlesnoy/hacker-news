import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
    const { title, rating, author, url, date, id } = props;
    const newDate = new Date(date * 1000);

    return (
        <li>
            <Link to={`/article/${id}`}>Link</Link>
            <article>
                <h2>{title}</h2>
                <p>by {author}</p>
                <p>{rating}</p>
                <p>{newDate.toDateString()}</p>
                {url && <Link to={url}>Link</Link>}
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
