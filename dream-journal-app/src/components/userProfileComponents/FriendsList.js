// Import React 
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function FriendsList() {
    return (
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
    )
}