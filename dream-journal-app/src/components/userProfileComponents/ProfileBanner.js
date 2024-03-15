// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function ProfileBanner() {
    return (
        <div id={style.profileComponent} className={style.grid}>
            <div className={style.componentCard}>
                <div className={style.profileGrid}>
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
                        <p>
                            This is some text in a paragraph about a user of the dream journal app and is their home for sharing their dreams with their freinds.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}