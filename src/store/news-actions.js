import { newsActions } from "./news-slice";
import { errorActions } from "./error-slice";

import { getStoriesIds, getData } from "../api/hacker-news-api";

const startIndex = 0;
const endIndex = 99;

const getSlice = (array, start = 0, end = 2) => {
    const slice = array.slice(start, end);
    return slice;
};

export const fetchNews = () => {
    return async (dispatch) => {
        try {
            dispatch(newsActions.resetNews());

            const newsIds = await getStoriesIds();
            const newsIdsSlice = getSlice(newsIds, startIndex, endIndex);
            const data = await Promise.all(
                newsIdsSlice.map((id) => getData(id))
            );
            dispatch(newsActions.loadStories(data));
        } catch (error) {
            dispatch(
                errorActions.showError({
                    status: "error",
                    title: "Error!",
                    message: "Fetching news failed!"
                })
            );
        }
    };
};

export const fetchStory = (id) => {
    return async (dispatch) => {
        try {
            dispatch(newsActions.resetArticle());

            const data = await getData(id);
            dispatch(newsActions.loadArticle(data));
        } catch (error) {
            dispatch(
                errorActions.showError({
                    status: "error",
                    title: "Error!",
                    message: "Fetching article failed!"
                })
            );
        }
    };
};

export const fetchComments = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(newsActions.resetComments());

            const kidsIds = getState().news.article.kids;
            const data = await Promise.all(kidsIds.map((id) => getData(id)));

            dispatch(newsActions.loadComments(data));
        } catch (error) {
            dispatch(
                errorActions.showError({
                    status: "error",
                    title: "Error!",
                    message: "Fetching comments failed!"
                })
            );
        }
    };
};

export const fetchSubComments = (kidsIds) => {
    return async (dispatch) => {
        try {
            const data = await Promise.all(kidsIds.map((id) => getData(id)));
            data.forEach((item) => dispatch(newsActions.loadSubComments(item)));
        } catch (error) {
            dispatch(
                errorActions.showError({
                    status: "error",
                    title: "Error!",
                    message: "Fetching comments failed!"
                })
            );
        }
    };
};
