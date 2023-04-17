import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/TodoSlice'

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});

export default store;
