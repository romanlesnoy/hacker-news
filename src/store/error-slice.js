import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: "error",
    initialState: { hasError: false, errorNotification: null },
    reducers: {
        showError(state, action) {
            state.hasError = true;
            state.errorNotification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const errorActions = errorSlice.action;

export default errorSlice;
