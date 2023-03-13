import React, { useEffect } from 'react';
import styles from './CreateAd.module.scss';

import { Header } from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreateAd } from '../../redux/slices/AdsSlice';

import {
    MenuItem,
    Select,
    TextField,
    ToggleButtonGroup,
    ToggleButton,
    Button,
    IconButton,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { PhotoCamera } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';

/* const getValue = (value) => (value ? categories.find((option) => option.value === value) : ''); */

export const CreateAd = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.data);

    const onSubmit = (data) => {
        dispatch(fetchCreateAd(data));
        console.log(data);
    };

    const {
        register,
        handleSubmit,
        setValue,
        control,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            category: null,
            condition: '0',
            price: '',
            currency: 'RUB',
            imagesUrl: ['img1.jpg', 'img2.jpg'],
            userId: userInfo._id,
            status: 0,
            endDate: null,
        },
        mode: 'onChange',
    });

    return (
        <>
            <Header />
            <div className="styles maincontainer">
                <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                    <h2>Создать новое объявление</h2>

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <div>
                            <h3 className={styles.title}>{'Название объявления*'}</h3>
                            <p className={styles.caption}>
                                {'По нему другие пользователи будут искать ваш товар'}
                            </p>
                        </div>
                        <TextField
                            {...register('title', {
                                required: 'Укажите заголовок*',
                                maxLength: { value: 220, message: 'Не более 220 символов' },
                            })}
                            required
                            helperText={errors.title?.message}
                            error={Boolean(errors.title?.message)}
                            fullWidth
                            label="Заголовок объявления"
                            variant="outlined"
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <h3 className={styles.title}>Описание*</h3>
                        <TextField
                            textareaautosize="true"
                            fullWidth
                            multiline
                            rows={4}
                            {...register('description', {
                                required: 'Укажите описание товара*',
                                maxLength: { value: 2200, message: 'Не более 2200 символов' },
                            })}
                            required
                            helpertext={errors.description?.message}
                            error={Boolean(errors.description?.message)}
                            label="Подробное описание вашего товара"
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <h3 className={styles.title}>Категория*</h3>
                        <TextField
                            select
                            fullWidth
                            label="Select"
                            defaultValue=""
                            inputProps={register('category', {
                                required: 'Укажите категорию',
                            })}
                            required
                            error={errors.category}
                            helpertext={errors.category?.message}
                        >
                            <MenuItem value={1}>Одежда, обувь и аксессуары </MenuItem>
                            <MenuItem value={2}>Электроника и аксессуары</MenuItem>
                            <MenuItem value={3}>Для дома</MenuItem>
                            <MenuItem value={4}>Красота и здоровье</MenuItem>
                            <MenuItem value={5}>Хобби и отдых</MenuItem>
                            <MenuItem value={6}>Другое</MenuItem>
                        </TextField>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <h3 className={styles.title}>Состояние*</h3>
                        <Controller
                            control={control}
                            name="condition"
                            rules={{ required: true }}
                            render={({
                                field: { onChange, value, getValue },
                                fieldState: { error },
                            }) => {
                                return (
                                    <>
                                        <ToggleButtonGroup
                                            color="primary"
                                            value={value}
                                            required
                                            onChange={onChange}
                                            exclusive
                                            helpertext={error?.message}
                                            error={Boolean(error?.message)}
                                        >
                                            <ToggleButton value={'0'} key="old">
                                                Б/у
                                            </ToggleButton>
                                            <ToggleButton value={'1'} key="new">
                                                новое
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </>
                                );
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <h3 className={styles.title}>Цена*</h3>
                        <TextField
                            sx={{ minWidth: 200, width: 210 }}
                            {...register('price', {
                                required: 'Укажите цену',
                                maxLength: { value: 12, message: 'Не более 12 цифр' },
                            })}
                            required
                            helpertext={errors.price?.message}
                            error={Boolean(errors.price?.message)}
                            id="outlined-basic"
                            label="Cумма"
                            variant="outlined"
                            multiline
                        />
                        <Controller
                            control={control}
                            name="currency"
                            rules={{ required: true }}
                            render={({
                                field: { onChange, value, getValue },
                                fieldState: { error },
                            }) => {
                                return (
                                    <>
                                        <Select
                                            label="Валюта"
                                            sx={{ width: 70 }}
                                            onChange={onChange}
                                            defaultValue="USD"
                                            value={value}
                                            helpertext={error?.message}
                                            error={Boolean(error?.message)}
                                        >
                                            <MenuItem label="$" value="USD">
                                                $
                                            </MenuItem>
                                            <MenuItem label="₽" value="RUB">
                                                ₽
                                            </MenuItem>
                                            <MenuItem label="RS" value="RS">
                                                ₨
                                            </MenuItem>
                                        </Select>
                                    </>
                                );
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <div>
                            <h3 className={styles.title}>{'Хочу продать до'}</h3>
                            <p className={styles.caption}>
                                {'Например, если хотите успеть продать до вылета'}
                            </p>
                        </div>
                        <Controller
                            name="endDate"
                            control={control}
                            render={({ field: { onChange, value, ...restField } }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        onChange={onChange}
                                        defaultValue=""
                                        value={value}
                                        label="Дата"
                                    />
                                </LocalizationProvider>
                            )}
                        />
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <div>
                                <h3 className={styles.title}>{'Фотографии*'}</h3>
                                <p className={styles.caption}>
                                    {'Не более 6 изображений в формате .jpg .jpeg .png'}
                                </p>
                            </div>

                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                            >
                                <input hidden accept="image/*" type="file" multiple />
                                <PhotoCamera sx={{ width: 50, height: 50, color: '#00aa5b' }} />
                            </IconButton>
                        </div>
                    </div>
                    <Button
                        sx={{ mt: 5, width: 180, height: 40, background: '#00aa5b' }}
                        variant="contained"
                        type="submit"
                    >
                        Опубликовать
                    </Button>
                </form>
            </div>
        </>
    );
};
