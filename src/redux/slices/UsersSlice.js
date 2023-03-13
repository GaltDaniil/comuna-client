import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchSeller = createAsyncThunk('auth/fetchSeller', async (params) => {
    try {
        const { data } = await axios.post('/users/seller', params);
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    data: {},
    status: 'loading',
};

export const UsersSlice = createSlice({
    name: 'UsersData',
    initialState,
    reducers: {
        setAdsItems(state, action) {
            state.data = action.payload;
        },
    },
    extraReducers: {
        //Все объявления
        [fetchSeller.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchSeller.fulfilled]: (state, action) => {
            state.status = 'loaded';
        },
        [fetchSeller.rejected]: (state) => {
            state.status = 'error';
        },
    },
});

export const { setAdsItems } = UsersSlice.actions;

export default UsersSlice.reducer;
