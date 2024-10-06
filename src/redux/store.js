import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/userSlice";
import carReducer from "./Slices/carSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        cars: carReducer
    },
});

export default store;