import React from 'react';
import styles from './NewAds.module.scss';
import { Card } from '../Card';
import { useSelector } from 'react-redux';

export const NewAds = () => {
    const addItems = useSelector((state) => state.adsItems.value);

    return (
        <div className={styles.container}>
            <h2>Новые объявления</h2>
            <div className={styles.items}>
                {addItems
                    .filter((el) => el.status !== 0)
                    .map((el, index) => {
                        return <Card key={index} {...el} />;
                    })}
            </div>
        </div>
    );
};
