import React from 'react';
import styles from './AccountPage.module.scss';

import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { UserInfo } from './AccountComp/UserInfo';
import { UserAds } from './AccountComp/UserAds';
import { Categories } from '../../components/Categories';

import { Tabs, Tab, Box } from '@mui/material';

export const AccountPage = () => {
    const [activeTab, setTab] = React.useState(0);

    return (
        <div className={styles.main}>
            <Header />
            <Search />
            {/* <Categories /> */}

            <div className={styles.container}>
                <div className={styles.mainContainer}>
                    <div data-unify="Tab" className={styles.tabHolder}>
                        <div className={styles.tabItems} role="tablist">
                            <ul
                                style={{
                                    listStyle: 'none',
                                    display: 'flex',
                                    padding: '0',
                                    margin: '0',
                                }}
                            >
                                <li
                                    className={activeTab === 0 ? styles.activeTab : ''}
                                    onClick={() => {
                                        setTab(0);
                                    }}
                                >
                                    Информация
                                </li>
                                <li
                                    className={activeTab === 1 ? styles.activeTab : ''}
                                    onClick={() => {
                                        setTab(1);
                                    }}
                                >
                                    Мои объявления
                                </li>
                                <li
                                    className={`${styles.deactiveTab} ${styles.disabled}`}
                                    onClick={() => {
                                        setTab(2);
                                    }}
                                >
                                    Мои резюме
                                </li>
                                <li
                                    className={`${styles.deactiveTab} ${styles.disabled}`}
                                    onClick={() => {
                                        setTab(3);
                                    }}
                                >
                                    Мои вакансии
                                </li>
                            </ul>
                        </div>
                    </div>
                    {activeTab === 0 ? <UserInfo /> : null}
                    {activeTab === 1 ? <UserAds /> : null}
                </div>
            </div>
        </div>
    );
};
