import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./news-slice";
import errorSlice from "./error-slice";

const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        error: errorSlice.reducer
    }
});

export default store;
