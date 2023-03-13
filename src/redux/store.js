import { configureStore } from '@reduxjs/toolkit';

import AdsReducer from './slices/AdsSlice';
import { getCategories } from './slices/CategoriesSlice';
import EnterReducer from './slices/EnterSlice';
import { authReducer } from './slices/AuthSlice';
import UsersSlice from './slices/UsersSlice';
import ChatSlice from './slices/ChatSlice';

export const store = configureStore({
    reducer: {
        adsItems: AdsReducer,
        categories: getCategories,
        isOpenEnter: EnterReducer,
        auth: authReducer,
        users: UsersSlice,
        chats: ChatSlice,
    },
});
