import React from 'react';
import styles from './CardPage.module.scss';
import axios from '../../axios';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneAd } from '../../redux/slices/AdsSlice';
import { fetchSeller } from '../../redux/slices/UsersSlice';
import { selectIsLogin } from '../../redux/slices/AuthSlice';
import { setIsOpenEnter } from '../../redux/slices/EnterSlice';
import { fetchAuthMe } from '../../redux/slices/AuthSlice';

import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { CastomerChat } from '../../components/CastomerChat';
import { setIsOpenChat, createChat, checkMyChats } from '../../redux/slices/ChatSlice';

export const CardPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { thisAd, oneAdStatus } = useSelector((state) => state.adsItems);
    const userData = useSelector((state) => state.auth.data);
    const sellerStatus = useSelector((state) => state.users.status);
    const isLogin = useSelector(selectIsLogin);

    const [isMainImage, setIsMainImage] = React.useState(0);
    const [seller, setIsSeller] = React.useState([]);

    React.useEffect(() => {
        const fn = async () => {
            console.log('начало прогрузки');
            const data = await dispatch(fetchOneAd({ id }));
            const userId = data.payload.userId;

            const seller = await dispatch(fetchSeller({ userId }));
            setIsSeller(seller.payload);
        };

        fn();
    }, []);

    const openAndCreateChat = () => {
        const fn = async () => {
            if (isLogin) {
                /* if (userData.chats.length > 0) {
                    const isAlreadyChating = await dispatch(
                        checkMyChats({ sellerId: thisAd.userId, chatsId: userData.chats }),
                    );
                }
                await dispatch(createChat({ sellerId: thisAd.userId, userId: userData._id })); */
                dispatch(setIsOpenChat());

                /* await dispatch(fetchAuthMe()); */
            } else {
                dispatch(setIsOpenEnter());
            }
        };
        fn();
    };

    /* const [isSeller, setIsSeller] = React.useState([]); */

    return (
        <>
            <Header />
            <Search />
            <div className={styles.container}>
                <div className={styles.grid1}>
                    <div className={styles.images}>
                        <div className={styles.imageContainer}>
                            {oneAdStatus === 'loaded' ? (
                                <img
                                    src={`/img/${thisAd.imagesUrl[isMainImage]}`}
                                    className={styles.mainImage}
                                    alt="123"
                                />
                            ) : null}
                        </div>
                        <div className={styles.miniImages}>
                            {oneAdStatus === 'loaded'
                                ? thisAd.imagesUrl.map((el, index) => (
                                      <div
                                          key={index}
                                          onClick={() => setIsMainImage(index)}
                                          className={styles.miniContainer}
                                      >
                                          <img src={`/img/${el}`} alt="" />
                                      </div>
                                  ))
                                : null}
                        </div>
                    </div>
                </div>

                <div className={styles.cardInfo}>
                    <h2>{thisAd.title}</h2>
                    <h4>Описание:</h4>
                    <pre>{thisAd.description}</pre>
                </div>
                <div className={styles.sellerInfo}>
                    <div className={styles.infoContainer}>
                        <span>Цена:</span>
                        <div style={{ display: 'flex' }}>
                            <p className={styles.price}>
                                {thisAd.price} {thisAd.currency}
                            </p>
                        </div>
                        <button className={styles.telegramBtn}>Связаться в телеграм</button>
                        <button onClick={() => openAndCreateChat()} className={styles.chatBtn}>
                            Связаться в онлайн чате
                        </button>
                        <div style={{ display: 'flex' }}>
                            <img
                                className={styles.miniAvatar}
                                src={sellerStatus === 'loaded' ? `/img/${seller.avatarUrl}` : ''}
                                alt="avatar"
                            />{' '}
                            <div>
                                <span>Продавец:</span>
                                <p>{seller.fullName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
