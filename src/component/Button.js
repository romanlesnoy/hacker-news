import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            type={props.type || "button"}
            className={styles.button}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default React.memo(Button);