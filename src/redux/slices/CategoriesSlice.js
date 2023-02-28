import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
        'Все категории',
        'Еда',
        'Одежда',
        'Техника',
        'Мебель',
        'Для дома',
        'Для активного отдыха',
    ],
};

export const CategoriesSlice = createSlice({
    name: 'CategoriesSlice',
    initialState,
    reducers: {},
});

export default CategoriesSlice.reducer;
