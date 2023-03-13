import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchCategories = createAsyncThunk('auth/fetchCategories', async (params) => {
    try {
        const { data } = await axios.get('/categories');

        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    value: [
        { name: 'Все категории', value: 0 },
        { name: 'Одежда, обувь и аксессуары', value: 1 },
        { name: 'Электроника', value: 2 },
        { name: 'Для дома', value: 3 },
        { name: 'Красота и здоровье', value: 4 },
        { name: 'Хобби и отдых', value: 5 },
        { name: 'Другое', value: 6 },
    ],
};

export const CategoriesSlice = createSlice({
    name: 'CategoriesSlice',
    initialState,
    reducers: {},
    extraReducers: {
        // FETCH AUTH

        [fetchCategories.pending]: (state) => {
            state.status = 'loading';
            state.value = [];
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.value = action.payload;
        },
        [fetchCategories.rejected]: (state) => {
            state.status = 'error';
            state.value = [];
        },
    },
});

export const getCategories = CategoriesSlice.reducer;
