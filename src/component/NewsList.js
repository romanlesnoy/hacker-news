import React from "react";

import NewsCard from "./NewsCard";
import { useSelector } from "react-redux";

const NewsList = () => {
    const stories = useSelector((state) => state.news.news);
    const isLoading = useSelector((state) => state.news.isLoading);

    return (
        <React.Fragment>
            {isLoading && <p>Loading...</p>}
            <ul>
                {!isLoading &&
                    stories.map((story) => (
                        <NewsCard
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            rating={story.score}
                            author={story.by}
                            date={story.time}
                            url={story.url}
                        />
                    ))}
            </ul>
        </React.Fragment>
    );
};

export default NewsList;
