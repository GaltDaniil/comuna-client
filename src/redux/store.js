import { configureStore } from '@reduxjs/toolkit';

import NewAddsReducer from './slices/NewAddsSlice';
import CategoriesReducer from './slices/CategoriesSlice';
import EnterReducer from './slices/EnterSlice';
import { authReducer } from './slices/AuthSlice';

export const store = configureStore({
    reducer: {
        newAddItems: NewAddsReducer,
        categories: CategoriesReducer,
        isOpenEnter: EnterReducer,
        auth: authReducer,
    },
});
