import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchMyChats = createAsyncThunk('auth/fetchMyChats', async (params) => {
    try {
        const { data } = await axios.post('/chats/my', params);

        return data;
    } catch (error) {
        console.log(error);
    }
});

export const checkMyChats = createAsyncThunk('auth/checkMyChats', async (params) => {
    try {
        const { data } = await axios.post('/chats/check', params);

        return data;
    } catch (error) {
        console.log(error);
    }
});

export const createChat = createAsyncThunk('auth/createChat', async (params) => {
    try {
        const { data } = await axios.put('/chats', params);

        return data;
    } catch (error) {
        console.log(error);
    }
});

export const sendMessege = createAsyncThunk('auth/sendMassege', async (params) => {
    try {
        /* const { data } = await axios.patch('/chats', params);

        return data; */
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    data: [],
    isOpen: false,
    status: 'loading',
    sendStatus: 'loading',
    checkStatus: 'loading',
};

export const ChatSlice = createSlice({
    name: 'chatsItems',
    initialState,
    reducers: {
        setIsOpenChat(state) {
            state.isOpen = !state.isOpen;
        },
    },
    extraReducers: {
        // Загрузка всех чатов
        [fetchMyChats.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchMyChats.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchMyChats.rejected]: (state) => {
            state.status = 'error';
            state.data = [];
        },

        // Добавление нового чата
        [createChat.pending]: (state) => {
            state.status = 'loading';
        },
        [createChat.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = [...state.data, action.payload];
        },
        [createChat.rejected]: (state) => {
            state.status = 'error';
        },

        // Отправка сообщения
        [sendMessege.pending]: (state) => {
            state.sendStatus = 'loading';
        },
        [sendMessege.fulfilled]: (state) => {
            state.sendStatus = 'loaded';
        },
        [sendMessege.rejected]: (state) => {
            state.sendStatus = 'error';
        },

        // проверка на наличие чата с пользователем
        [checkMyChats.pending]: (state) => {
            state.checkStatus = 'loading';
        },
        [checkMyChats.fulfilled]: (state) => {
            state.checkStatus = 'loaded';
        },
        [checkMyChats.rejected]: (state) => {
            state.checkStatus = 'error';
        },
    },
});

export const { setIsOpenChat } = ChatSlice.actions;
export default ChatSlice.reducer;
