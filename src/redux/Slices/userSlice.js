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
        const { email, password } = userData
        const res = await axios.get('http://localhost:5000/users')
        const users = res.data



        // Find the user that matches the email and password
        const user = users.find(user => user.email === email && user.password === password)

        if (!user) {
            throw new Error("Invalid email or password")
        }
        // Save userinfo to local Storage after login
        localStorage.setItem("userInfo", JSON.stringify(user));

        return user

    } catch (error) {
        return rejectWithValue(error.message);
    }
})

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