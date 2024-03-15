// Import React
import React from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

// Import Child Components
import ProfileBanner from './userProfileComponents/ProfileBanner';
import MonthDisplay from './userProfileComponents/MonthDisplay';
import DreamPost from './userProfileComponents/DreamPost';
import FriendsList from './userProfileComponents/FriendsList';

export default function UserProfile() {
    return (
        <main>
            <div className={style.pageGrid}>
                <ProfileBanner />

                <MonthDisplay />

                <DreamPost />

                <FriendsList />
            </div>
        </main>
    )
}