import { Routes, Route } from 'react-router-dom';
import React from 'react';
import axios from './axios';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/AuthSlice';
import { selectIsLogin } from './redux/slices/AuthSlice';

import { Main } from './pages/Main';
import { Login } from './components/Login';
import { Registration } from './pages/Registration';
import { AccountPage } from './pages/AccountPage';
import { setAdsItems } from './redux/slices/AdsSlice';
import { CreateAd } from './pages/CreateAd';
import { AdminPanel } from './pages/AdminPanel';
import { CardPage } from './pages/CardPage';
import { CastomerChat } from './components/CastomerChat';

function App() {
    const dispatch = useDispatch();

    const isChatOpen = useSelector((state) => state.chats.isOpen);
    const isOpen = useSelector((state) => state.isOpenEnter.value);
    const isLogin = useSelector(selectIsLogin);

    React.useEffect(() => {
        dispatch(fetchAuthMe());
        console.log('Загрузка данных юзера с App');
    }, []);

    return (
        <div className="mainContainer">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/user/setting" element={<AccountPage />} />
                <Route path="/createad" element={<CreateAd />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/ad/:id" element={<CardPage />} />
            </Routes>
            {isOpen && !isLogin ? <Login /> : null}
            {isChatOpen ? <CastomerChat /> : null}
        </div>
    );
}

export default App;
