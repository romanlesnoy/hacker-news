import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./NotFound.module.css";
import Button from "../../components/Button/Button";

function NotFound() {
    const history = useHistory();

    return (
        <>
            <header className={styles.header}>
                <Button
                    role="link"
                    text={"back"}
                    onClick={() => history.goBack()}
                />
            </header>

            <section className={styles.notFound}>
                <h1>404</h1>
                <p>Page Not Found</p>
            </section>
        </>
    );
}

export default NotFound;
