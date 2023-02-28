import React from 'react';
import styles from './UserAds.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { CardWithInfo } from '../../../../components/CardWithInfo';

export const UserAds = () => {
    const AdsItems = useSelector((state) => state.auth.data.ads);
    const [activeFilter, setFilter] = React.useState(0);

    const RenderAdsItems = () => {
        return AdsItems.length > 0
            ? AdsItems.map((el) => {
                  return <p>{el}</p>;
              })
            : null;
    };

    const testAds = [
        {
            _id: '63fa0ae8f657912000d1e111',
            title: 'тестовый заголовок для объявления которое будет видеть юзер и ыаыу ф ы аыа яы фцу ыу ук цуа цу',
            description:
                'Тестовое описание, которое должно быть не более 2200 символов. Вообще нужно будет конечно подумать какие должны быть ограничения и кк они выглядят. Должны же быть еще и смайлики и возможность вствить пробелы и прочее...',
            price: '9990',
            categorie: '2',
            imagesUrl: ['img2.jpg', 'img1.jpg'],
            viewsCount: 200,
            createdAt: {
                $date: {
                    $numberLong: '1677331176749',
                },
            },
            updatedAt: {
                $date: {
                    $numberLong: '1677331176749',
                },
            },
            __v: 0,
        },
        {
            _id: '63fa0ae8f657912000d1e111',
            title: 'тестовый заголовок для объявления которое будет видеть юзер и ыаыу ф ы аыа яы фцу ыу ук цуа цу',
            description:
                'Тестовое описание, которое должно быть не более 2200 символов. Вообще нужно будет конечно подумать какие должны быть ограничения и кк они выглядят. Должны же быть еще и смайлики и возможность вствить пробелы и прочее...',
            price: '9990',
            categorie: '2',
            imagesUrl: ['img2.jpg', 'img1.jpg'],
            viewsCount: 200,
            createdAt: {
                $date: {
                    $numberLong: '1677331176749',
                },
            },
            updatedAt: {
                $date: {
                    $numberLong: '1677331176749',
                },
            },
            __v: 0,
        },
        {
            _id: '63fa0ae8f657912000d1e111',
            title: 'тестовый заголовок для объявления которое будет видеть юзер и ыаыу ф ы аыа яы фцу ыу ук цуа цу',
            description:
                'Тестовое описание, которое должно быть не более 2200 символов. Вообще нужно будет конечно подумать какие должны быть ограничения и кк они выглядят. Должны же быть еще и смайлики и возможность вствить пробелы и прочее...',
            price: '9990',
            categorie: '2',
            imagesUrl: ['img2.jpg', 'img1.jpg'],
            viewsCount: 200,
            createdAt: {
                $date: {
                    $numberLong: '1677331176749',
                },
            },
            updatedAt: {
                $date: {
                    $numberLong: '1677331176749',
                },
            },
            __v: 0,
        },
    ];

    return (
        <div className={styles.container}>
            <ul className={styles.filters}>
                <li className={styles.filterTitle}>Статус</li>
                <li
                    onClick={() => setFilter(0)}
                    className={activeFilter === 0 ? styles.activeFilter : styles.filter}
                >
                    Все
                </li>
                <li
                    onClick={() => setFilter(1)}
                    className={activeFilter === 1 ? styles.activeFilter : styles.filter}
                >
                    Активные
                </li>
                <li
                    onClick={() => setFilter(2)}
                    className={activeFilter === 2 ? styles.activeFilter : styles.filter}
                >
                    В архиве
                </li>
            </ul>
            <div>
                {testAds.map((el) => {
                    return <CardWithInfo {...el} />;
                })}
            </div>
        </div>
    );
};
