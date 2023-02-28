import React from 'react';
import styles from './SearchPage.module.scss';

export const SearchPage = () => {
    return (
        <div className={styles.container}>
            <h2>Продажа, тут название категонии и количество</h2>
            <div className={styles.filterAndResult}>
                <div className={styles.filters}>1</div>
                <div className={styles.resultContainer}>2</div>
            </div>
        </div>
    );
};
