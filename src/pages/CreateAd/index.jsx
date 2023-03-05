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

export const CreateAd = () => {
    const [category, setCategory] = React.useState('');
    const [isNew, setIsNew] = React.useState('0');
    const [isСurrency, setIsСurrency] = React.useState('RP');

    const changeCategory = (event) => {
        setCategory(event.target.value);
    };
    const changeСurrency = (event) => {
        setIsСurrency(event.target.value);
    };
    const changeNewOrOld = (event, newAlignment) => {
        setIsNew(newAlignment);
    };

    /*  const useStyles = makeStyles({
        customTextField: {
            '& input::placeholder': {
                fontSize: '20px',
            },
        },
    }); */

    return (
        <>
            <Header />
            <div className="styles maincontainer">
                <div className={styles.container}>
                    <h2>Создать новое объявление</h2>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Название объявления</h3>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Заголовок объявления"
                                variant="outlined"
                                multiline=""
                                helperText="не более 200 символов"
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
                                label="Подробное описание вашего товара"
                                helperText="не более 2200 символов"
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Категория</h3>
                            <FormControl sx={{ minWidth: 200, width: 210 }}>
                                <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    placeholder="Ваша категория"
                                    id="demo-simple-select"
                                    value={category}
                                    label="Категория"
                                    onChange={changeCategory}
                                >
                                    <MenuItem value={1}>Одежда, обувь и аксессуары </MenuItem>
                                    <MenuItem value={2}>Электроника и аксессуары</MenuItem>
                                    <MenuItem value={3}>Для дома</MenuItem>
                                    <MenuItem value={4}>Красота и здоровье</MenuItem>
                                    <MenuItem value={5}>Хобби и отдых</MenuItem>
                                    <MenuItem value={6}>Другое</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <h3 className={styles.title}>Состояние</h3>
                            <ToggleButtonGroup
                                color="primary"
                                value={isNew}
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
                                id="outlined-basic"
                                label="Cумма"
                                variant="outlined"
                                multiline=""
                            />
                            <FormControl sx={{ minWidth: 50, width: 70 }}>
                                <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    placeholder="Ваша категория"
                                    id="demo-simple-select"
                                    value={isСurrency}
                                    label="Валюта"
                                    onChange={changeСurrency}
                                    helperText="выберете валюту"
                                >
                                    <MenuItem label="$" value={'USD'}>
                                        $
                                    </MenuItem>
                                    <MenuItem label="₽" value={'RUB'}>
                                        ₽
                                    </MenuItem>
                                    <MenuItem label="RS" value={'RS'}>
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
                    >
                        Опубликовать
                    </Button>
                </div>
            </div>
        </>
    );
};
