import React from 'react';
import styles from './Main.module.scss';
import { Route, Routes } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
/* import axios from '../../axios'; */
import axios from 'axios';
import { setAdsItems } from '../../redux/slices/NewAddsSlice.js';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Categories } from '../../components/Categories';
import { NewAdds } from '../../components/NewAdds';

export const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios
            .get('http://localhost:4444/ads')
            .then((res) => dispatch(setAdsItems(Object.values(res.data))));
    }, []);

    const addItems = useSelector((state) => state.newAddItems.value);

    return (
        <div className={styles.container}>
            <Header />
            <Search />
            <Categories />
            <Routes>
                <Route path="/" element={<NewAdds />} />
                <Route path="/categorie1" element={<NewAdds />} />
            </Routes>
        </div>
    );
};
