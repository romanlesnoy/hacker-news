import { newsActions } from "./news-slice";
import { errorActions } from "./error-slice";

import { getStoriesIds, getStory } from "../api/hacker-news-api";

const getSlice = (array, startIndex = 0, endIndex = 2) => {
    const slice = array.slice(startIndex, endIndex);
    return slice;
};

export const fetchNewsIds = () => {
    return async (dispatch) => {
        try {
            const newsIds = await getStoriesIds();
            const newsIdsSlice = getSlice(newsIds);
            dispatch(newsActions.loadNewsIds(newsIdsSlice));
        } catch (error) {
            dispatch(
                errorActions.showError({
                    status: "error",
                    title: "Error!",
                    message: "Fetching news IDs failed!"
                })
            );
        }
    };
};

export const fetchNewsStories = (ids) => {
    return async (dispatch) => {
        try {
            const data = await Promise.all(ids.map((id) => getStory(id)));
            console.log(ids);
            console.log(data);
            dispatch(newsActions.loadStories(data));
        } catch (error) {
            dispatch(
                errorActions.showError({
                    status: "error",
                    title: "Error!",
                    message: "Fetching stories failed!"
                })
            );
        }
    };
};
