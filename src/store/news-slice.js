import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        stories: [],
        article: {},
        comments: [],
        subComments: [],
        storiesAreLoading: true,
        articleIsLoading: true,
        commentsAreLoading: true
    },
    reducers: {
        loadStories(state, action) {
            state.stories = action.payload;
            state.storiesAreLoading = false;
        },
        loadArticle(state, action) {
            state.article = action.payload;
            state.articleIsLoading = false;
        },
        loadComments(state, action) {
            state.comments = action.payload;
            state.commentsAreLoading = false;
        },
        loadSubComments(state, action) {
            state.subComments = [...state.subComments, action.payload];
        },
        resetNews(state) {
            state.stories = [];
            state.storiesAreLoading = true;
        },
        resetArticle(state) {
            state.article = {};
            state.comments = [];
            state.subComments = [];
            state.articleIsLoading = true;
            state.commentsAreLoading = true;
        },
        resetComments(state) {
            state.comments = [];
            state.subComments = [];
            state.commentsAreLoading = true;
        }
    }
});

export const newsActions = newsSlice.actions;

export default newsSlice;
