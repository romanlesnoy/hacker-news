import React from "react";

import NewsCard from "./NewsCard";
import { useSelector } from "react-redux";

const NewsList = () => {
    const stories = useSelector((state) => state.news.story);
    const isLoading = useSelector((state) => state.news.isLoading);

    return (
        <ul>
            {isLoading &&
                stories.map((story) => (
                    <NewsCard
                        key={story.id}
                        title={story.title}
                        rating={story.score}
                        author={story.by}
                        date={story.time}
                        url={story.url}
                    />
                ))}
        </ul>
    );
};

export default NewsList;
