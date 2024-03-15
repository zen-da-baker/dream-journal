// Import React 
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

// Import Child Components
import FriendCard from './FriendCard';

export default function FriendsList() {
    return (
        <div id={style.friendsListComponent} className={style.grid}>
            <div className={style.componentCard}>
                <div className={style.profileGrid}>
                    <div id={style.friendListHeading}>
                        <h2>Friend List</h2>
                    </div>

                    <FriendCard 
                        id={style.friend1}
                        friendName='Friend 1'
                    />

                    <FriendCard
                        friendName='Friend 2'
                    />

                    <FriendCard 
                        friendName='Friend 3'
                    />

                    <FriendCard
                        friendName='Friend 4'
                    />

                    <FriendCard
                        friendName='Friend 5'
                    />

                </div>
            </div>
        </div>
    )
}