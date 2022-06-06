import React from "react";
import PropTypes from "prop-types";

import dateConverter from "../../helpers/dateConverter";

const CardContent = (props) => {
    const { title, score, by, time, descendants } = props;
    const date = dateConverter(time);

    return (
        <>
            <h2>{title}</h2>
            <div className="details">
                <span>by {by}</span>&nbsp;
                <time>posted on {date}</time>
            </div>
            <div className="details">
                <span>Rating: {score}</span>&nbsp;|&nbsp;
                {descendants ? (
                    <span>Comments: {descendants}</span>
                ) : (
                    <span>No comments</span>
                )}
            </div>
        </>
    );
};

CardContent.propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
    by: PropTypes.string,
    time: PropTypes.number,
    descendants: PropTypes.number
};

export default CardContent;
