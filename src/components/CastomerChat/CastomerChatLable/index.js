import React from 'react';
import styles from './CastomerChatLable.module.scss';
import { fetchSeller } from '../../../redux/slices/UsersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { faN } from '@fortawesome/free-solid-svg-icons';

export const CastomerChatLable = ({ _id, usersId, userId, ChangeChatUser, index, activeUser }) => {
    const dispatch = useDispatch();
    const [sellerId] = usersId.filter((el) => el !== userId);

    const [seller, setIsSeller] = React.useState({});
    const sellerStatus = useSelector((state) => state.users.status);

    React.useEffect(() => {
        const fn = async () => {
            const seller = await dispatch(fetchSeller({ userId }));
            console.log(seller);
            setIsSeller(seller.payload);
        };
        fn();
        if (index === 0) {
            console.log('Установка параметров');
            ChangeChatUser({
                index,
                _id: _id,
                sellerId: sellerId,
                fullName: seller.fullName,
                avatarUrl: seller.avatarUrl,
            });
        }
    }, []);

    console.log(seller);
    return (
        <li
            onClick={() =>
                ChangeChatUser({
                    index,
                    sellerId: sellerId,
                    fullName: seller.fullName,
                    avatarUrl: seller.avatarUrl,
                })
            }
            className={
                activeUser.index !== index
                    ? styles.castoberLable
                    : `${styles.castoberLable} ${styles.added}`
            }
        >
            <div className={styles.chatImgWraper}>
                {sellerStatus === 'loaded' ? (
                    <img src={`/img/${seller.avatarUrl}`} alt="img" />
                ) : null}
            </div>
            <div className={styles.castomerLable}>
                <p>{seller.fullName}</p>
                {/* {status ? (
                    <span className={styles.statusOnline}>Online</span>
                ) : (
                    <span className={styles.statusOffline}>Offline</span>
                )} */}
            </div>
        </li>
    );
};
