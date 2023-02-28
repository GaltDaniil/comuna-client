import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

export const EnterSlice = createSlice({
    name: 'EnterSlice',
    initialState,
    reducers: {
        setIsOpenEnter(state, action) {
            state.value = !state.value;
        },
    },
});

export const { setIsOpenEnter } = EnterSlice.actions;
export default EnterSlice.reducer;
