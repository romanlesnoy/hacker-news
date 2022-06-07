import React from "react";
import PropTypes from "prop-types";

import classes from "./ErrorNotification.module.css";

const ErrorNotification = (props) => {
    return (
        <section className={classes.notification}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

ErrorNotification.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
};

export default ErrorNotification;
