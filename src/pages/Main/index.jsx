import React from 'react';
import styles from './Main.module.scss';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Categories } from '../../components/Categories';
import { NewAds } from '../../components/NewAds';

export const Main = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Search />
            <Categories />
            <Routes>
                <Route path="/" element={<NewAds />} />
                <Route path="/categorie1" element={<NewAds />} />
            </Routes>
        </div>
    );
};
