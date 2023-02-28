import React from 'react';
import styles from './CardWithInfo.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { whebItWasPosting } from '../../utils/dateConstructor';

export const CardWithInfo = ({
    id,
    title,
    description,
    imagesUrl,
    price,
    createdAt,
    viewsCount,
    likeStatus,
}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImgContainer}>
                <img className={styles.cardImage} width={200} src={'/img/' + imagesUrl[0]} alt="" />
            </div>
            <div className={styles.cardInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{price}</span>
            </div>

            <div className={styles.cardBtns}>
                <p>{whebItWasPosting(createdAt)}</p>

                <span>{viewsCount}</span>
                <FontAwesomeIcon className={styles.cardView} icon={faEye} />
                <FontAwesomeIcon className={styles.cardLike} icon={faHeart} />
            </div>
        </div>
    );
};
