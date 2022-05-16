import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        ids: [],
        news: [],
        article: null,
        comments: [],
        isLoading: true,
        hasArticle: false
    },
    reducers: {
        loadNewsIds(state, action) {
            state.ids = action.payload;
        },
        loadStories(state, action) {
            state.news = action.payload;
            state.isLoading = false;
            console.log(action.payload, "Load stories");
        },
        loadComments(state, action) {
            state.comments = action.payload;
        },
        addArticle(state, action) {
            state.article = action.payload;
            state.hasArticle = true;
            console.log(action.payload, "Add story");
        }
    }
});

export const newsActions = newsSlice.actions;

export default newsSlice;
