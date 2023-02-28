import React from 'react';
import styles from './UserInfo.module.scss';

import { useSelector, useDispatch } from 'react-redux';

export const UserInfo = () => {
    const userInfo = useSelector((state) => state.auth.data);

    return (
        <div style={{ display: 'flex' }}>
            <div className={styles.avatarContainer}>
                <section tabindex="-1" data-unify="Card" className={styles.avatarSector}>
                    <div type="default" className={styles.pictureDiv}>
                        <picture className={styles.avatar}>
                            <img
                                src="https://images.tokopedia.net/img/cache/300/default_picture_user/default_toped-18.jpg"
                                alt="profile-pic"
                                data-unify="Image"
                                class="css-46cmny eit69wn2"
                            />
                        </picture>
                        <p>{userInfo.fullName}</p>
                    </div>
                    <input type="file" />
                    <button type="button">
                        <span>Pilih Foto</span>
                    </button>
                    <p>
                        Размер изображения не должен превышать 10 Mb. Разрешенные форматы файлов:
                        .JPG .JPEG .PNG
                    </p>
                </section>
            </div>
            <div className={styles.infoContainer}>
                <p data-unify="Typography" class="css-24774n-unf-heading e1qvo2ff8">
                    Изменить информацию профиля{' '}
                </p>
                <div>
                    <span className={styles.spanTitle}> Имя</span>
                    <span class="css-5hicrt">{userInfo.fullName} </span>
                    <a>изменить</a>
                </div>
                <div>
                    <span className={styles.spanTitle}>Дата рождения</span>
                    <a data-unify="Link" class="css-1qo5uf8-unf-link e1u528jj0">
                        Добавить дату рождения
                    </a>
                </div>
                <div>
                    <span className={styles.spanTitle}>Описание </span>
                    <span className={styles.spanDiscription}>
                        {' '}
                        How to inject CSS using content script file in Chrome extension?
                        stackoverflow.com https://stackoverflow.com › h... Перевести эту страницу 19
                        июл. 2012 г. — You can use element.classList.add("my_new_class") to add new
                        class in the element and in css you can style that element by using the
                        newly added ... 2 ответа · Лучший ответ: You could add to the manifest's
                        permissions field; See web_accessible_resources. So you would ... My CSS is
                        not getting injected through my content script 15 мар. 2012 г. Injecting
                        custom CSS with content.js [CHROME EXTENSION ...
                    </span>
                    <a>Изменить</a>
                </div>
                <p data-unify="Typography">Контактные данные </p>
                <div class="css-oh71wi">
                    <span className={styles.spanTitle}>Email</span>
                    <span>{userInfo.email}</span>
                    {/* <div
                                    data-unify="Label"
                                    role="group"
                                    class="css-1g8tb31-unf-label e18v4rsl0"
                                >
                                    Terverifikasi
                                </div> */}
                    <a>Изменить</a>
                </div>
                <div class="css-oh71wi">
                    <span className={styles.spanTitle}>Телефон</span>
                    <span class="css-5hicrt">
                        {userInfo.phone.lenght > 0 ? userInfo.phone : '6282144793557'}
                    </span>
                    <a>Изменить</a>
                </div>
            </div>
        </div>
    );
};
