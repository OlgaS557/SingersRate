import { configureStore } from "@reduxjs/toolkit";
import ratingReducer from '../slices/ratingSlice';

export const store = configureStore ({
    reducer: {
        ratingReducer,
    },
});