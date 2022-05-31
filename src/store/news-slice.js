import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        ids: [],
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
        loadNewsIds(state, action) {
            state.ids = action.payload;
        },
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
            console.log("Передали комментарии в стейт");
            state.comments = action.payload;
            state.hasComments = true;
        },
        loadSubComments(state, action) {
            console.log("Передали субкомментари в стейт");
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
        }
    }
});

export const newsActions = newsSlice.actions;

export default newsSlice;
