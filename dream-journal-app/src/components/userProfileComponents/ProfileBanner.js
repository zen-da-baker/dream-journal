// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function ProfileBanner(props) {
    return (
        <div id={style.profileComponent} className={style.grid}>
            <div className={style.componentCard}>
                <div className={style.profileGrid}>
                    <div id={style.profilePicture}>
                        <img src={props.pfpSrc} alt='Profile icon' />
                    </div>

                    <div id={style.profileBanner}>
                        <img src={props.bannerSrc} alt='Banner icon' />
                    </div>

                    <div id={style.username}>
                        <h2>{props.username}</h2>
                    </div>

                    <div id={style.bio}>
                        <p>{props.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}