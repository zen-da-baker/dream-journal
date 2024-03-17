// Import React
import React, { useState } from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

// Import Child Components
import ProfileBanner from './userProfileComponents/ProfileBanner';
import MonthDisplay from './userProfileComponents/MonthDisplay';
import DreamPost from './userProfileComponents/DreamPost';
import FriendsList from './userProfileComponents/FriendsList';

// Import Database
import userData from '../demoUserData/demoUserData.json';

export default function UserProfile() {

    const [selected, setSelected] = useState(false);

    function handleSelection() {
        setSelected(true);
        return selected;
    }

    return (
        <main>
            <div className={style.pageGrid}>
                <ProfileBanner 
                    username={userData.user1.username}

                    bio={userData.user1.bio}

                    pfpSrc='./images/Korra.png'

                    bannerSrc='./images/Valorant.jpg'
                />

                <MonthDisplay />

                <DreamPost 
                    dateSelected={handleSelection}
                />

                <FriendsList />
            </div>
        </main>
    )
}