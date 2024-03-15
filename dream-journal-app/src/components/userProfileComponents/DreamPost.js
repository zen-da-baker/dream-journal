// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function DreamPost() {
    return (
        <div id={style.postComponent} className={style.grid}>
            <div className={style.componentCard}>
                <h2>Post Component</h2>
            </div>
        </div>
    )
}