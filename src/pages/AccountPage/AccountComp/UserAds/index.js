import React from 'react';
import styles from './UserAds.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAds } from '../../../../redux/slices/AdsSlice';
import { CardWithInfo } from '../../../../components/CardWithInfo';

export const UserAds = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.data);
    const userAds = useSelector((state) => state.adsItems.userAds);
    const [activeFilter, setactiveFilter] = React.useState(0);

    /* const addItems = useSelector((state) => state.AddItems.value); */

    React.useEffect(() => {
        dispatch(fetchUserAds(userInfo));
    }, []);

    const RenderAdsItems = () => {
        return userAds > 0
            ? userAds.map((el, index) => {
                  return <p key={index}>{el}</p>;
              })
            : null;
    };

    return (
        <div className={styles.container}>
            <ul className={styles.filters}>
                <li className={styles.filterTitle}>Статус</li>
                <li
                    onClick={() => setactiveFilter(0)}
                    className={activeFilter === 0 ? styles.activeFilter : styles.filter}
                >
                    Все
                </li>
                <li
                    onClick={() => setactiveFilter(1)}
                    className={activeFilter === 1 ? styles.activeFilter : styles.filter}
                >
                    На проверке
                </li>
                <li
                    onClick={() => setactiveFilter(2)}
                    className={activeFilter === 2 ? styles.activeFilter : styles.filter}
                >
                    Активные
                </li>

                <li
                    onClick={() => setactiveFilter(3)}
                    className={activeFilter === 3 ? styles.activeFilter : styles.filter}
                >
                    В архиве
                </li>
            </ul>
            <div>
                {activeFilter === 0 ? userAds.map((el) => <CardWithInfo {...el} />) : null}
                {activeFilter === 1
                    ? userAds.filter((el) => el.status === 0).map((el) => <CardWithInfo {...el} />)
                    : null}
                {activeFilter === 2
                    ? userAds.filter((el) => el.status === 1).map((el) => <CardWithInfo {...el} />)
                    : null}
                {activeFilter === 3
                    ? userAds.filter((el) => el.status === 2).map((el) => <CardWithInfo {...el} />)
                    : null}
                {/* {userAds.map((el) => {
                    return <CardWithInfo {...el} />;
                })} */}
            </div>
        </div>
    );
};
