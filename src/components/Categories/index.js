import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Categories.module.scss';

export function Categories() {
    const categoriesItems = useSelector((state) => state.categories.value);

    return (
        <div className={styles.container}>
            {categoriesItems.map((el) => {
                if (el.name === 'Все категории') {
                    return <p></p>;
                }
                if (el.name === 'Другое') {
                    return <p></p>;
                }
                return <p className={styles.categoriesItem}>{el.name}</p>;
            })}
        </div>
    );
}
