import React from 'react';
import styles from './Login.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenEnter } from '../../redux/slices/EnterSlice';
import { useForm } from 'react-hook-form';
import { fetchAuth, selectIsLogin } from '../../redux/slices/AuthSlice';

import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Login = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(selectIsLogin);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: 'test@test.ru',
            password: '12345',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));

        if (!data.payload) {
            alert('Не верный логин или пароль');
        }

        if (data.payload.token) {
            window.localStorage.setItem('token', data.payload.token);
        }
    };

    const ref = React.useRef(null);

    return (
        <div className={styles.overlay}>
            <div ref={ref} className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <h2>Вход и Регистрация</h2>

                    <TextField
                        className="field"
                        {...register('email', { required: 'Укажите почту' })}
                        required
                        helperText={errors.email?.message}
                        error={Boolean(errors.email?.message)}
                        type="email"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        className={styles.field}
                        {...register('password', { required: 'Укажите пароль' })}
                        required
                        helperText={errors.password?.message}
                        error={Boolean(errors.password?.message)}
                        id="outlined-basic"
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                    />
                    <div style={{ marginTop: 25 }}>
                        <input className={styles.checkbox} type="checkbox" />

                        <p>Запомнить меня</p>
                        <a href="">Забыли пароль?</a>
                    </div>
                    <Button className={styles.btnEnter} type="submit" variant="contained">
                        Войти
                    </Button>
                    {/* <button type="submit" className={styles.btnEnter}>
                        Войти
                    </button> */}
                </form>
                <div>
                    <p>У меня еще нет аккаунта на Comuna</p>
                    <Link to={'/registration'} state>
                        <button
                            onClick={() => dispatch(setIsOpenEnter())}
                            className={styles.btnReg}
                        >
                            Регистрация
                        </button>
                    </Link>
                </div>
                <FontAwesomeIcon
                    onClick={() => dispatch(setIsOpenEnter())}
                    className={styles.btnClose}
                    icon={faXmark}
                />
            </div>
        </div>
    );
};
