import React from "react";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Hacker News</h1>
            <button className={styles.button}>Update</button>
        </header>
    );
};

export default Header;
