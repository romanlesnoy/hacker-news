import React from "react";

import { useSelector } from "react-redux";

const Article = () => {
    const article = useSelector((state) => state.news.article);
    const newDate = new Date(article.time * 1000);

    return (
        <article>
            <h2>{article.title}</h2>
            <p>by {article.by}</p>
            <p>{article.rating}</p>
            <p>{newDate.toString()}</p>
            {article.url && <a href={article.url}>Link</a>}
        </article>
    );
};

export default Article;
