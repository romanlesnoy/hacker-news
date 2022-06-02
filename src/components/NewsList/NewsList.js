import React from "react";
import { useSelector } from "react-redux";

import styles from "./NewsList.module.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import sortByDate from "../../helpers/sortByDate";

const NewsList = () => {
    const stories = useSelector((state) => state.news.news);
    const isLoading = useSelector((state) => state.news.isLoading);
    const cards = stories.filter((item) => item !== null).sort(sortByDate);

    return (
        <React.Fragment>
            {isLoading && <Preloader />}
            <ul className={styles.cardList}>
                {!isLoading &&
                    cards.map((story) => (
                        <NewsCard
                            key={story.id}
                            id={story.id}
                            title={story.title}
                            score={story.score}
                            author={story.by}
                            time={story.time}
                            descendants={story.descendants}
                        />
                    ))}
            </ul>
        </React.Fragment>
    );
};

export default NewsList;
