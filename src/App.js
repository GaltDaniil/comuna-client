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
        axios
            .get('https://95.163.242.251:4444/ads')
            .then((res) => dispatch(setAdsItems(Object.values(res.data))));
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
