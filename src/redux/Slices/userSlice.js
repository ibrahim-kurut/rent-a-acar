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


//  initialize user
const initialState = {
    user: null,
    isLoggedIn: false,
    status: 'idle',
    error: null,
};

// create user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
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
    }
})

export default userSlice.reducer