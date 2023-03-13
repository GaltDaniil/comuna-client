import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchAllAds = createAsyncThunk('auth/fetchAllAds', async () => {
    try {
        const { data } = await axios.get('/ads');

        return data;
    } catch (error) {
        console.log(error);
    }
});

export const fetchOneAd = createAsyncThunk('auth/fetchOneAd', async (params) => {
    try {
        const { data } = await axios.post('/ads/id', params);

        return data;
    } catch (error) {
        console.log('Что-то не так');
        console.log(error);
    }
});

export const fetchCreateAd = createAsyncThunk('auth/fetchCreateAd', async (params) => {
    try {
        const { data } = await axios.post('/ads', params);

        return data;
    } catch (error) {
        console.log(error);
    }
});

export const fetchUserAds = createAsyncThunk('auth/fetchUserAds', async (params) => {
    try {
        const { data } = await axios.post('/ads/user', params);
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    value: [],
    status: 'loading',
    userAds: [],
    thisAd: {},
};

export const AdsSlice = createSlice({
    name: 'adsItems',
    initialState,
    reducers: {
        setAdsItems(state, action) {
            state.value = action.payload;
        },
    },
    extraReducers: {
        //Все объявления
        [fetchAllAds.pending]: (state) => {
            state.status = 'loading';
            state.value = [];
        },
        [fetchAllAds.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.value = action.payload;
        },
        [fetchAllAds.rejected]: (state) => {
            state.status = 'error';
            state.value = [];
        },
        // Все объявления пользователя
        [fetchUserAds.pending]: (state) => {
            state.status = 'loading';
            state.userAds = [];
        },
        [fetchUserAds.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.userAds = action.payload;
        },
        [fetchUserAds.rejected]: (state) => {
            state.status = 'error';
            state.userAds = [];
        },

        // Конкретное объявление
        [fetchOneAd.pending]: (state) => {
            state.status = 'loading';
            state.thisAd = {};
        },
        [fetchOneAd.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.thisAd = action.payload;
        },
        [fetchOneAd.rejected]: (state) => {
            state.status = 'error';
            state.thisAd = {};
        },
    },
});

export const { setAdsItems } = AdsSlice.actions;

export default AdsSlice.reducer;
