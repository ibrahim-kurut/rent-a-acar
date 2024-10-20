import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/userSlice";
import carReducer from "./Slices/carSlice";
import reservationsReducer from "./Slices/reserveSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        cars: carReducer,
        reservations: reservationsReducer
    },
});

export default store;