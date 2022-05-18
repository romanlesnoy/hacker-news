import React from "react";

import NewsCard from "./NewsCard";
import { useSelector } from "react-redux";
import styles from "./NewsList.module.css";

const NewsList = () => {
    const stories = useSelector((state) => state.news.news);
    const isLoading = useSelector((state) => state.news.isLoading);

    return (
        <React.Fragment>
            {isLoading && <p>Loading...</p>}
            <ul className={styles.cardList}>
                {!isLoading &&
                    stories.map((story) => (
                        <NewsCard
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            score={story.score}
                            author={story.by}
                            date={story.time}
                            comments={story.kids}
                        />
                    ))}
            </ul>
        </React.Fragment>
    );
};

export default NewsList;
