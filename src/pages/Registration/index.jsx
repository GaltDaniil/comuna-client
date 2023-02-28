import React from 'react';
import styles from './Registration.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchRegister } from '../../redux/slices/AuthSlice';

import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export const Registration = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        console.log(data);

        if (!data.payload) {
            console.log('error');
        }

        if (data.payload.token) {
            window.localStorage.setItem('token', data.payload.token);
        }
    };

    return (
        <div className={styles.container}>
            <Link to={'/'}>
                <span className={styles.logo}> COMUNA</span>
            </Link>
            <main className={styles.main}>
                <div className={styles.picture}>
                    <img className={styles.imgReg} src="/img/RegBackground.png" alt="" />
                    <h3></h3>
                    <p></p>
                </div>
                <div className={styles.formHolder}>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <h2>Регистрация</h2>
                        <p>
                            Уже есть аккаунт на Comuna? <a href="">Войти</a>
                        </p>
                        <div className={styles.liner}>или зарегистрируйтесь</div>
                        <div className={styles.inputReg}>
                            <TextField
                                className={styles.field}
                                {...register('email', { required: 'Укажите почту' })}
                                required
                                helperText={errors.email?.message}
                                error={Boolean(errors.email?.message)}
                                type="email"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                fullWidth
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
                                margin="normal"
                            />
                            {/* <span>Например: comuna@example.com</span> */}

                            {/* <input placeholder="Придумайте пароль" type="email" name="" id="" />
                            <span>Более 5 символов или букв</span> */}
                        </div>
                        <Button
                            className={styles.btnSubmit}
                            type="submit"
                            variant="contained"
                            disabled={!isValid}
                        >
                            Регистрация
                        </Button>
                        <p>
                            Регистрируясь, я соглашаюсь с Условиями использования и Политикой
                            конфедициальности
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
};
