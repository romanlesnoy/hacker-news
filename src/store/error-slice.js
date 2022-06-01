import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: { hasError: false, notification: null },
    reducers: {
        showError(state, action) {
            state.hasError = true;
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const errorActions = errorSlice.actions;

export default errorSlice;
