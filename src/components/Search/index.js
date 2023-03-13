import React from 'react';
import styles from './Search.module.scss';
import axios from '../../axios';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../redux/slices/CategoriesSlice';

export function Search() {
    const dispatch = useDispatch();

    /* React.useEffect(() => {
        const asdd = async (res) => {
            const { data } = await axios.get('/categories');
            console.log(data);
        };
        asdd();

        dispatch(fetchCategories());
    }, []); */

    const categoriesItems = useSelector((state) => state.categories.value);
    return (
        <div className={styles.container}>
            <select placeholder="123" name="" id="">
                {categoriesItems.map((el, index) => {
                    return (
                        <option value={el.value} key={index}>
                            {el.name}
                        </option>
                    );
                })}
            </select>
            <input className={styles.searchInput} type="text" />

            <button> поиск</button>
        </div>
    );
}
