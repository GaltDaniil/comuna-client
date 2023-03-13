import React from 'react';
import styles from './CardWithInfo.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { postingDate } from '../../utils/postingDate';

export const CardWithInfo = ({
    id,
    title,
    description,
    imagesUrl,
    price,
    createdAt,
    viewsCount,
    likeStatus,
    status,
    favoriteCount,
}) => {
    const statusRender = () => {
        if (status === 0) {
            return <p style={{ color: 'orange' }}> На проверке</p>;
        } else if (status === 1) {
            return <p style={{ color: 'green' }}>Опубликовано</p>;
        } else if (status === 2) {
            <p>В архиве</p>;
        } else {
            <p style={{ color: 'red' }}>Отклонено</p>;
        }
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImgContainer}>
                <img className={styles.cardImage} width={200} src={'/img/' + imagesUrl[0]} alt="" />
            </div>
            <div className={styles.cardInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
            </div>

            <div className={styles.cardBtns}>
                <div style={{ display: 'flex' }}>
                    <span>Статус</span>

                    <p>{statusRender()}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <span>Дата создания</span>
                    <p>{postingDate(createdAt)}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <span>Просмотров</span>
                    <FontAwesomeIcon className={styles.cardView} icon={faEye} />
                    <p>{viewsCount}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <span>В избранных у</span>
                    <FontAwesomeIcon className={styles.cardLike} icon={faHeart} />
                    <p>{favoriteCount}</p>
                </div>
                <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
                    <button className={styles.cardEdit}>Редактировать</button>
                    <FontAwesomeIcon className={styles.cardDelete} icon={faTrash} />
                </div>
            </div>
        </div>
    );
};
