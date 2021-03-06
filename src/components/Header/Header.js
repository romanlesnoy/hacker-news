import React from "react";
import { useDispatch } from "react-redux";

import { fetchNews } from "../../store/news-actions";
import styles from "./Header.module.css";
import Button from "../Button/Button";

const Header = () => {
    const dispatch = useDispatch();

    const updateNews = () => {
        dispatch(fetchNews());
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Hacker News</h1>
            <Button onClick={updateNews} text="Update" role={"link"} />
        </header>
    );
};

export default Header;
