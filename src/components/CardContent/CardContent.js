import React from "react";
import PropTypes from "prop-types";

import dateConverter from "../../helpers/dateConverter";
import styles from "./CardContent.module.css";

const CardContent = (props) => {
    const { title, score, by, time, descendants } = props;
    const date = dateConverter(time);

    return (
        <>
            {title && <h2>{title}</h2>}
            {by && time && (
                <div className={styles.details}>
                    <span>by {by}&nbsp;</span>
                    <time>posted on {date}</time>
                </div>
            )}
            {score && descendants >= 0 && (
                <div className={styles.details}>
                    {<span>Rating: {score}&nbsp;|&nbsp;</span>}
                    {descendants ? (
                        <span>Comments: {descendants}</span>
                    ) : (
                        <span>No comments</span>
                    )}
                </div>
            )}
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
