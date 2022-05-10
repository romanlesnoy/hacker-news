import React from "react";

import Header from "./Header";
import NewsList from "./NewsList";

const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <NewsList />
            </main>
        </React.Fragment>
    );
};

export default MainPage;
