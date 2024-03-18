// Import React
import React from 'react';

// Import Stylesheet
import style from '../stylesheets/styles.module.css';

export default function Search() {
    return (
        <input id={style.search} type='text' placeholder='Search' className={style.textField} />
    )
}