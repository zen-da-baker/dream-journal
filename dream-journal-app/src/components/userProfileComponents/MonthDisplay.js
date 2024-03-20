// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function MonthDisplay(props) {
    return (
        <div id={style.monthComponent} className={style.grid}>
            <div className={style.componentCard}>
                <h2>Month Component</h2>

                <p>{props.databaseInput}</p>

                <p>{props.postDisplay}</p>
            </div>
        </div>
    )
}