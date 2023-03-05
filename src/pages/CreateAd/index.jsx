import React from 'react';
import styles from './CreateAd.module.scss';

import { Header } from '../../components/Header';

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ToggleButtonGroup,
    ToggleButton,
    Button,
    IconButton,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';

import ReactSelect from 'react-select';

const categories = [
    { value: '0', label: 'category 1' },
    { value: '1', label: 'category 2' },
    { value: '2', label: 'category 3' },
    { value: '3', label: 'category 4' },
    { value: '4', label: 'category 5' },
    { value: '5', label: 'category 6' },
    { value: '6', label: 'category 7' },
];

const getValue = (value) => (value ? categories.find((option) => option.value === value) : '');

export const CreateAd = () => {
    const [category, setCategory] = React.useState('');
    const [isCondition, setIsCondition] = React.useState('old');
    const [isСurrency, setIsСurrency] = React.useState('USD');

    const changeCategory = (event) => {
        setCategory(event.target.value);
    };
    const changeСurrency = (event) => {
        setIsСurrency(event.target.value);
    };
    const changeNewOrOld = (event, newAlignment) => {
        setIsCondition(newAlignment);
    };
    const onSubmit = (props) => {
        console.log(props);
    };

    const {
        register,
        handleSubmit,
        setError,
        control,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            title: '',
            description: '',
            categoru: '',
            condition: 'old',
            price: '',
            currency: 'RUB',
            imagesUrl: [],
            description: '',
            description: '',
        },
        mode: 'onChange',
    });

    return (
        <>
            <Header />
            <div className="styles maincontainer">
                <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
                    <h2>Создать новое объявление</h2>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Название объявления</h3>
                            <TextField
                                {...register('title', {
                                    required: 'Укажите заголовок',
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
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Описание</h3>
                            <TextField
                                TextareaAutosize
                                fullWidth
                                multiline
                                rows={4}
                                {...register('description', {
                                    required: 'Укажите описание товара',
                                    maxLength: { value: 2200, message: 'Не более 2200 символов' },
                                })}
                                required
                                helperText={errors.description?.message}
                                error={Boolean(errors.description?.message)}
                                label="Подробное описание вашего товара"
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Категория</h3>
                            <FormControl sx={{ minWidth: 200, width: 210 }}>
                                {/* <InputLabel id="demo-simple-select-label">Категория</InputLabel> */}
                                {/* <Select
                                    labelId="demo-simple-select-label"
                                    placeholder="Ваша категория"
                                    id="demo-simple-select"
                                    value={category}
                                    label="Категория"
                                    onChange={changeCategory}
                                >
                                    <MenuItem value={'1'}>Одежда, обувь и аксессуары </MenuItem>
                                    <MenuItem value={'2'}>Электроника и аксессуары</MenuItem>
                                    <MenuItem value={'3'}>Для дома</MenuItem>
                                    <MenuItem value={'4'}>Красота и здоровье</MenuItem>
                                    <MenuItem value={'5'}>Хобби и отдых</MenuItem>
                                    <MenuItem value={'6'}>Другое</MenuItem>
                                </Select> */}
                                <Controller
                                    control={control}
                                    name="category"
                                    rules={{
                                        required: 'Выберите категорию',
                                    }}
                                    error={errors.description?.message}
                                    render={({
                                        field: { onChange, value },
                                        fieldState: { error },
                                    }) => (
                                        <div>
                                            <ReactSelect
                                                placeholder="Категории"
                                                options={categories}
                                                value={getValue(value)}
                                                onChange={(value) => onChange(value).value}
                                            />
                                        </div>
                                    )}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Состояние</h3>
                            <ToggleButtonGroup
                                color="primary"
                                {...register('condition', {
                                    required: 'Укажите описание товара',
                                })}
                                value={isCondition}
                                required
                                exclusive
                                onChange={changeNewOrOld}
                                aria-label="Platform"
                            >
                                <ToggleButton value="0">Б/у</ToggleButton>
                                <ToggleButton value="1">новое</ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Цена</h3>
                            <TextField
                                sx={{ minWidth: 200, width: 210 }}
                                {...register('price', {
                                    required: 'Укажите цену',
                                    maxLength: { value: 12, message: 'Не более 12 цифр' },
                                })}
                                required
                                helperText={errors.price?.message}
                                error={Boolean(errors.price?.message)}
                                id="outlined-basic"
                                label="Cумма"
                                variant="outlined"
                                multiline=""
                            />
                            <FormControl sx={{ minWidth: 50, width: 70 }}>
                                <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                                <Select
                                    label="Валюта"
                                    onChange={changeСurrency}
                                    {...register('currency', {
                                        value: 'RUB',
                                        required: 'Укажите валюту',
                                    })}
                                    required
                                    helperText={errors.currency?.message}
                                    error={Boolean(errors.currency?.message)}
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
                            </FormControl>
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Фотографии</h3>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                            >
                                <input hidden accept="image/*" type="file" />
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
