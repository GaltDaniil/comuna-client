import React from 'react';
import styles from './Search.module.scss';

import { useSelector } from 'react-redux';

export function Search() {
    const categoriesItems = useSelector((state) => state.categories.value);

    return (
        <div className={styles.container}>
            <select placeholder="123" name="" id="">
                {categoriesItems.map((el) => {
                    return <option value={el}>{el}</option>;
                })}
            </select>
            <input className={styles.searchInput} type="text" />

            <button> поиск</button>
        </div>
    );
}
