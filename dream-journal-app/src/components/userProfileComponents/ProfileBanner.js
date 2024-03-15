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

                    <div id={style.profilePicture}>
                        <p>Profile Picture</p>
                    </div>

                    <div id={style.profileBanner}>
                        <p>Profile Banner</p>
                    </div>

                    <div id={style.username}>
                        <p>Username</p>
                    </div>

                    <div id={style.bio}>
                        <p>Bio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}