import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        news: [],
        article: {},
        comments: [],
        subComments: [],
        isLoading: true,
        hasArticle: false,
        hasComments: false,
        hasSubComments: false
    },
    reducers: {
        loadStories(state, action) {
            state.news = action.payload;
            state.isLoading = false;
        },
        loadArticle(state, action) {
            state.article = action.payload;
            state.hasArticle = true;
            state.isLoading = false;
        },
        loadComments(state, action) {
            state.comments = action.payload;
            state.hasComments = true;
        },
        loadSubComments(state, action) {
            state.subComments = [...state.subComments, action.payload];
            state.hasSubComments = true;
        },
        resetNews(state) {
            state.news = [];
            state.isLoading = true;
        },
        resetArticle(state) {
            state.article = {};
            state.comments = [];
            state.subComments = [];
            state.hasArticle = false;
            state.hasComments = false;
            state.hasSubComments = false;
        },
        resetComments(state) {
            state.comments = [];
            state.subComments = [];
            state.hasComments = false;
            state.hasSubComments = false;
        }
    }
});

export const newsActions = newsSlice.actions;

export default newsSlice;
