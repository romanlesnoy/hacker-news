import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: "news",
    initialState: {
        ids: [],
        story: {},
        comments: []
    },
    reducers: {
        loadNewsIds(state, action) {
            state.ids = action.payload;
        },
        loadStories(state, action) {
            state.story = action.payload;
        },
        loadComments(state, action) {
            state.comments = action.payload;
        }
    }
});

export const newsActions = newsSlice.actions;

export default newsSlice;