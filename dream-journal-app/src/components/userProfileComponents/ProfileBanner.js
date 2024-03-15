// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function ProfileBanner() {
    return (
        <div id={style.profileComponent} className={style.grid}>
            <div className={style.card}>
                <div className={style.profileGrid}>
                    <h2>Profile Component</h2>

                    <p>Profile Picture</p>
                    <p>Profile Banner</p>
                    <p>Username</p>
                    <p>Bio</p>
                </div>
            </div>
        </div>
    )
}