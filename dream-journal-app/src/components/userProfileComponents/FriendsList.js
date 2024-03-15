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
                        friendCardId={style.friend1}
                        friendName='Friend 1'
                    />

                    <FriendCard
                        friendCardId={style.friend2}
                        friendName='Friend 2'
                    />

                    <FriendCard 
                        friendCardId={style.friend3}
                        friendName='Friend 3'
                    />

                    <FriendCard
                        friendCardId={style.friend4}
                        friendName='Friend 4'
                    />

                </div>
            </div>
        </div>
    )
}