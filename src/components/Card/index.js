import React from 'react';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

import { postingDate } from '../../utils/postingDate';

export const Card = ({
    _id,
    title,
    description,
    imagesUrl,
    price,
    createdAt,
    viewsCount,
    likeStatus,
    currency,
}) => {
    const currencyIcon = () => {
        if (currency === 'USD') {
            return '$';
        } else if (currency === 'RUB') {
            return '₽';
        } else if (currency === 'RS') {
            return 'Rp';
        }
    };

    return (
        <div className={styles.cardContainer}>
            <NavLink to={`/ad/${_id}`}>
                <div className={styles.cardImgContainer}>
                    <img
                        className={styles.cardImage}
                        width={200}
                        src={'/img/' + imagesUrl[0]}
                        alt=""
                    />
                </div>
            </NavLink>

            <div className={styles.cardInfo}>
                <NavLink to={`/ad/${_id}`}>
                    <h3>{title}</h3>
                </NavLink>

                <p>{description}</p>
                <div>
                    <span>{price}</span>
                    <span style={{ marginLeft: '5px' }}>{currencyIcon()}</span>
                </div>
            </div>

            <div className={styles.cardBtns}>
                <p>{postingDate(createdAt)}</p>

                <span>{viewsCount}</span>
                <FontAwesomeIcon className={styles.cardView} icon={faEye} />
                <FontAwesomeIcon className={styles.cardLike} icon={faHeart} />
            </div>
        </div>
    );
};
