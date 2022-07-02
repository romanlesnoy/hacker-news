import React from "react";
import { useSelector } from "react-redux";

import styles from "./NewsList.module.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import sortByDate from "../../helpers/sortByDate";

const NewsList = () => {
    const storiesAreLoading = useSelector(
        (state) => state.news.storiesAreLoading
    );
    const stories = useSelector((state) => state.news.stories);
    const cards = [...stories].sort(sortByDate);

    const currentPage = useSelector((state) => state.pagination.currentPage);
    const newsPerPage = useSelector((state) => state.pagination.dataLimit);

    const indexOfLastCard = currentPage * newsPerPage;
    const indexOfFirstCard = indexOfLastCard - newsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <React.Fragment>
            {storiesAreLoading && <Preloader />}
            {currentCards && (
                <>
                    <ul className={styles.cardList}>
                        {currentCards.map((story) => (
                            <NewsCard key={story.id} {...story} />
                        ))}
                    </ul>
                    <Pagination />
                </>
            )}
        </React.Fragment>
    );
};

export default NewsList;
