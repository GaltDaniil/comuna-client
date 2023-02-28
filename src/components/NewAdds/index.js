import React from 'react';
import styles from './NewAdds.module.scss';
import { Card } from '../Card';
import { useSelector } from 'react-redux';

export const NewAdds = () => {
    const addItems = useSelector((state) => state.newAddItems.value);
    return (
        <div className={styles.container}>
            <h2>Новые объявления</h2>
            <div className={styles.items}>
                {addItems.map((el, index) => {
                    return <Card key={index} {...el} />;
                })}
            </div>
        </div>
    );
};
