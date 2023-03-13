import React from 'react';
import styles from './AdsMod.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../../../axios';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

export const AdsMod = ({
    _id,
    title,
    description,
    price,
    condition,
    imagesUrl,
    currency,
    setIsOpenMod,
}) => {
    const [isDeclineOpen, setIsDeclineOpen] = React.useState(false);
    const approvedAd = async () => {
        try {
            await axios.put('/ads/ok', { _id });
        } catch (error) {
            console.log(error);
        }
    };

    const declineAd = async (event) => {
        try {
            event.preventDefault();
            console.log(event.target);
        } catch (error) {}
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popContent}>
                <div className={styles.imgBlock}>
                    {imagesUrl.map((el) => (
                        <img src={`/img/${el}`} alt="img"></img>
                    ))}
                </div>
                <div className={styles.infoBlock}>
                    <p>Заголовок</p>
                    {title}
                    <p>Описание</p>
                    {description}
                    <p>Состояние</p>
                    {condition}
                    <p>Цена</p>
                    {price}
                    <p>Валюта</p>
                    {currency}
                    <p>Дата</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <button onClick={approvedAd}>Одобрить</button>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => {
                                setIsDeclineOpen((pred) => !pred);
                            }}
                        >
                            Отклонить
                        </button>{' '}
                        {isDeclineOpen ? (
                            <div className={styles.radioDecline}>
                                <form onSubmit={(e) => declineAd(e)}>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">
                                            Причина отклонения
                                        </FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="3.1"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel
                                                value="3.1"
                                                control={<Radio />}
                                                label="Запрещенные товары и услуги"
                                            />
                                            <FormControlLabel
                                                value="3.2"
                                                control={<Radio />}
                                                label="Ошибки в заголовке или описании"
                                            />
                                            <FormControlLabel
                                                value="3.3"
                                                control={<Radio />}
                                                label="Слишком частая публицация"
                                            />
                                        </RadioGroup>
                                        <button type="submit"> Подтвердить</button>
                                    </FormControl>
                                </form>
                            </div>
                        ) : null}
                    </div>
                </div>
                <FontAwesomeIcon
                    onClick={() => setIsOpenMod(false)}
                    className={styles.btnClose}
                    icon={faXmark}
                />
            </div>
        </div>
    );
};
