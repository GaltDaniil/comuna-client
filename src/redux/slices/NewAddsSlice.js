import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const NewAddsSlice = createSlice({
    name: 'newAddItems',
    initialState,
    reducers: {
        setAdsItems(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setAdsItems } = NewAddsSlice.actions;

export default NewAddsSlice.reducer;
