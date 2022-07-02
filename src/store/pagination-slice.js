import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        currentPage: 1,
        dataLimit: 10,
        totalCount: 0
    },
    reducers: {
        setCount(state, action) {
            state.totalCount = action.payload;
        },
        setPage(state, action) {
            state.currentPage = action.payload;
        }
    }
});

export const paginationActions = paginationSlice.actions;

export default paginationSlice;
