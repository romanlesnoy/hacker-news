import React from "react";
import PropTypes from "prop-types";

import CardContent from "../CardContent/CardContent";

const Article = (props) => {
    return (
        <article>
            <CardContent {...props} />
            {props.text && (
                <p dangerouslySetInnerHTML={{ __html: props.text }} />
            )}
            {props.url && (
                <p>
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read source
                    </a>
                </p>
            )}
        </article>
    );
};

Article.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string
};

export default Article;
