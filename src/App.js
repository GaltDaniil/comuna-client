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
import { setAdsItems } from './redux/slices/NewAddsSlice';

function App() {
    const dispatch = useDispatch();

    const isOpen = useSelector((state) => state.isOpenEnter.value);
    const isLogin = useSelector(selectIsLogin);

    React.useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <div className="mainContainer">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/user/setting" element={<AccountPage />} />
            </Routes>
            {isOpen && !isLogin ? <Login /> : null}
        </div>
    );
}

export default App;
