import React from 'react';
import styles from './Moderation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CardWithInfo } from '../../../../components/CardWithInfo';
import { Card } from '../../../../components/Card';
import { AdsMod } from './components/AdsMod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export const Moderation = () => {
    const adsForModeration = useSelector((state) => state.addItems.value);
    const [isOpenMod, setIsOpenMod] = React.useState(false);
    const [isAdsProps, setIsAdsProps] = React.useState([]);

    const fn = (props) => {
        setIsAdsProps(props);
        setIsOpenMod(true);
    };

    return (
        <>
            <h2>Требуется модерация</h2>
            <div>
                <h4>Список объявлений</h4>
                <div className={styles.adsItems}>
                    {adsForModeration
                        .filter((el) => el.status === 0)
                        .map((el, index) => (
                            <div className={styles.ad}>
                                <Card key={index} {...el} />
                                <button className={styles.moderBtn} onClick={() => fn(el)}>
                                    <FontAwesomeIcon color="white" icon={faGear} />
                                </button>
                            </div>
                        ))}
                </div>
                {isOpenMod ? <AdsMod {...isAdsProps} setIsOpenMod={setIsOpenMod} /> : null}
            </div>
        </>
    );
};
