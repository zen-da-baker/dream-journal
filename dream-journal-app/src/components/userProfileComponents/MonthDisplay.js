// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function MonthDisplay() {
    return (
        <div id={style.monthComponent} className={style.grid}>
            <div className={style.card}>
                <h2>Month Component</h2>
            </div>
        </div>
    )
}