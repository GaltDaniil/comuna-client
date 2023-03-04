import React from 'react';
import styles from './CreateAd.module.scss';

import { Header } from '../../components/Header';

export const CreateAd = () => {
    return (
        <>
            <Header />
            <div className="styles maincontainer">
                <div className={styles.container}>
                    <h2>Создать новое объявление</h2>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Название объявления</h3>
                            <input className={styles.field} type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Название объявления</h3>
                            <input className={styles.field} type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Название объявления</h3>
                            <input className={styles.field} type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Название объявления</h3>
                            <input className={styles.field} type="text" name="" id="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
