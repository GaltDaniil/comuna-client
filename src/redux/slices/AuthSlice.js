import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    try {
        const { data } = await axios.post('/auth/login', params);

        return data;
    } catch (error) {
        console.log(error);
    }
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async (params) => {
    try {
        const { data } = await axios.get('/auth/me');
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    try {
        const { data } = await axios.post('/auth/register', params);
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    data: null,
    status: 'loading',
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.data = null;
            window.localStorage.removeItem('token');
        },
    },
    extraReducers: {
        // FETCH AUTH

        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuth.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
        // FETCH ME

        [fetchAuthMe.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
        // FETCH REGISTER

        [fetchRegister.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchRegister.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
    },
});

export const selectIsLogin = (state) => Boolean(state.auth.data);

export const { logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
