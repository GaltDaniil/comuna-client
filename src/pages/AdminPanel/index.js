import React from 'react';
import styles from './AdminPanel.module.scss';

import { Moderation } from './Components/Moderation';

export const AdminPanel = () => {
    return (
        <>
            <div>header</div>
            <div className={styles.container}>
                <div className={styles.leftPanel}>
                    <ul className={styles.menuItems}>
                        <li value={0}>Главная</li>
                        <li value={1}>Пользователи</li>
                        <li value={2}>Объявления</li>
                        <li value={3}>Модерация</li>
                        <li value={4}>Админы</li>
                    </ul>
                </div>
                <div className={styles.rightPanel}>
                    <div className="styles content">
                        <Moderation />
                    </div>
                </div>
            </div>
        </>
    );
};
