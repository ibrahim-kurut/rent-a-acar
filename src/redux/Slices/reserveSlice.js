import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// create new reservations 
export const createReservation = createAsyncThunk(
    'reservations/createReservation',
    async (reservationData, { rejectWithValue }) => {
        console.log(reservationData);


        try {
            // Get the Token from Localstorage
            const user = JSON.parse(localStorage.getItem('userInfo'));

            const token = user.access


            if (!token) {
                return rejectWithValue('You must be logged in to create a reservation');
            }

            const response = await axios.post('http://127.0.0.1:8000/rent_a_car/api/reservations/', reservationData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data;


        } catch (error) {
            if (!error.response) {
                throw error;
            }
            console.log("hata yakalama -----> ", error.response.data.non_field_errors);

            return rejectWithValue(error.response.data);
        }
    }
);

// get cars that were rented by the user himself
export const getUserReservations = createAsyncThunk(
    'reservations/getUserReservations',
    async (_, { rejectWithValue }) => {
        try {
            const user = JSON.parse(localStorage.getItem('userInfo'));
            const token = user?.access;

            if (!token) {
                return rejectWithValue('You must be logged in to view your reservations');
            }

            const response = await axios.get('http://127.0.0.1:8000/rent_a_car/api/reservations/', {
                headers: { Authorization: `Bearer ${token}` },
            });

            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);







const reserveSlice = createSlice({
    name: 'reservations',
    initialState: {
        loading: false,
        error: null,
        reservations: [],
        userReservations: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createReservation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createReservation.fulfilled, (state, action) => {
                state.loading = false;
                // Add the new reservation to the list
                state.reservations.push(action.payload);
            })
            .addCase(createReservation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // get user reservations
        builder
            .addCase(getUserReservations.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUserReservations.fulfilled, (state, action) => {
                state.loading = false;
                state.userReservations = action.payload;
            })
            .addCase(getUserReservations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export default reserveSlice.reducer;