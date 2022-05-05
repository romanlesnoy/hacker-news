import React, { useEffect, useState, useCallback } from "react";

import { getStoriesIds, getStory } from "./API/hacker-news-api";

function App() {
    const [storiesList, setStoriesList] = useState([]);

    const getSlice = (array, startIndex = 0, endIndex = 99) => {
        const slice = array.slice(startIndex, endIndex);
        return slice;
    };

    const getStories = async (arrayIds) => {
        let loadedStories = [];

        for (const ids of arrayIds) {
            const story = await getStory(ids);

            loadedStories.push({
                id: story.id,
                author: story.by,
                score: story.score,
                date: story.time,
                descendants: story.descendants,
                title: story.title,
                url: story.url
            });
        }

        console.log(loadedStories);

        return loadedStories;
    };

    const fetchAllData = useCallback(async () => {
        try {
            const value = await getStoriesIds();
            const arrayIds = getSlice(value, 1, 20);
            const stories = await getStories(arrayIds);
            setStoriesList(stories);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchAllData();
    }, [fetchAllData]);

    console.log(storiesList);

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    {/* {storiesList.map((story) => (
                        <li>
                            <p>{story.title}</p>
                            <p>{story.score}</p>
                            <p>{story.author}</p>
                            <p>{story.date}</p>
                        </li>
                    ))} */}
                </ul>
            </header>
        </div>
    );
}

export default App;
