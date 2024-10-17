import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Registration Process
export const register = createAsyncThunk('user/register', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('http://localhost:5000/users', userData)
        return res.data;

    } catch (error) {
        return rejectWithValue(error)
    }
})


// Login process 
export const login = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
    try {
        // Send user data to the API
        const { username, password } = userData;
        const res = await axios.post('http://localhost:8000/rent_a_car/api/users/login/', {
            username,
            password
        });

        // Check the API response
        const user = res.data;

        if (!user) {
            throw new Error("Invalid username or password");
        }

        // Save user data in Localstorage
        localStorage.setItem("userInfo", JSON.stringify(user));

        return user;

    } catch (error) {
        // If the error contains a response from the server
        if (error.response && error.response.data.detail) {
            return rejectWithValue(error.response.data.detail);
        } else {
            return rejectWithValue(error.message);
        }
    }
});


//  initialize user
const initialState = {
    // If the user info is in Local Storage, get it, or it return null
    user: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
    isLoggedIn: localStorage.getItem("userInfo") ? true : false,
    status: 'idle',
    error: null,
};

// create user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Action for logging out the user
        logout: (state) => {
            // Remove user info from localStorage
            localStorage.removeItem("userInfo");

            // Reset user state
            state.user = null;
            state.isLoggedIn = false;
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })

            // ============== login ==============
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.status = 'succeeded'
                state.error = null
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { logout } = userSlice.actions;

export default userSlice.reducer