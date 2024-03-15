// Import React
import React from 'react';

// Import Styles
import style from '../styles/styles.module.css';

export default function UserProfile() {
    return (
        <main>
            <div className={style.pageGrid}>
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

                <div id={style.monthComponent} className={style.grid}>
                    <div className={style.card}>
                        <h2>Month Component</h2>
                    </div>
                </div>

                <div id={style.postComponent} className={style.grid}>
                    <div className={style.card}>
                        <h2>Post Component</h2>
                    </div>
                </div>

                <div id={style.friendsListComponent} className={style.grid}>
                    <div className={style.card}>
                        <div className={style.friendsGrid}>
                            <h2>Friends List Component</h2>

                            <p>Friend 1 Card</p>
                            <p>Friend 2 Card</p>
                            <p>Friend 3 Card</p>
                            <p>Friend 4 Card</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}