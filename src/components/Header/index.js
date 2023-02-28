import React from 'react';
import styles from './Header.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsOpenEnter } from '../../redux/slices/EnterSlice';
import { selectIsLogin } from '../../redux/slices/AuthSlice';
import { logout } from '../../redux/slices/AuthSlice';

import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const disputch = useDispatch();
    const isOpen = useSelector((state) => state.isOpenEnter.value);
    const isLogin = useSelector(selectIsLogin);

    const onClickLogout = () => {
        if (window.confirm('Вы точно хотите выйти?')) {
            disputch(logout());
        }
    };

    return (
        <header className={styles.container}>
            <Link
                to={'/'}
                style={{
                    position: 'relative',
                    fontSize: '38px',
                    fontWeight: '700',
                    color: 'rgb(0, 207, 38)',
                    textDecoration: 'none',
                    top: '-5px',
                }}
            >
                comuna
            </Link>
            <p style={{}}>Какой нибудь пиздатый слоган</p>
            {isLogin ? (
                <div className={styles.btns}>
                    <button className={styles.btnNewAdd}>+ выложить объявление</button>
                    <Link
                        to={'user/setting'}
                        style={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: '10px',
                            marginLeft: '10px',
                            opacity: '0.7',
                            color: 'grey',
                        }}
                    >
                        <FontAwesomeIcon size="lg" icon={faUser} />
                    </Link>
                    <FontAwesomeIcon
                        onClick={() => onClickLogout()}
                        className={styles.btnLogout}
                        icon={faArrowRightFromBracket}
                    />
                    {/* <Button className={styles.btnLogout} variant="contained">
                        Contained
                    </Button> */}
                </div>
            ) : (
                <div className={styles.btns}>
                    <button onClick={() => disputch(setIsOpenEnter())} className={styles.btnEnter}>
                        {' '}
                        вход и регистрация
                    </button>
                    <button className={styles.btnNewAdd}>+ выложить объявление</button>
                </div>
            )}
        </header>
    );
};
