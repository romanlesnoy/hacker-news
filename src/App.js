import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNewsIds, fetchNewsStories } from "./store/news-actions";

function App() {
    const dispatch = useDispatch();
    const ids = useSelector((state) => state.news.ids);

    useEffect(() => {
        dispatch(fetchNewsIds());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchNewsStories(ids));
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header"></header>
        </div>
    );
}

export default App;
