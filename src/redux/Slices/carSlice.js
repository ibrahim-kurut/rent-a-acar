import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Add a new car
export const createNewCar = createAsyncThunk('cars/createNewCar', async (newCarData) => {
    try {
        const res = await axios.post('http://localhost:5000/cars', newCarData);
        return res.data;
    } catch (error) {
        console.error('Failed to create new car:', error);
        throw error;
    }
});

// get all cars
export const getAllCars = createAsyncThunk('cars/getAllCars', async () => {
    try {
        const res = await axios.get('http://localhost:5000/cars');
        return res.data;
    } catch (error) {
        console.error('Failed to get all cars:', error);
        throw error;
    }
})

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        status: 'idle', //  loading, succeeded, failed
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(createNewCar.pending, (state) => {
                state.status = 'loading';
            })

            .addCase(createNewCar.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cars.push(action.payload);
            })

            .addCase(createNewCar.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // get all cars
            .addCase(getAllCars.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllCars.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cars = action.payload;
            })
            .addCase(getAllCars.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;

            })
    }
});

export default carSlice.reducer;
