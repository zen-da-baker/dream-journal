// Import React
import React, { useState } from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

// Import Child Components
import ProfileBanner from './userProfileComponents/ProfileBanner';
import MonthDisplay from './userProfileComponents/MonthDisplay';
import DreamPost from './userProfileComponents/DreamPost';
import FriendsList from './userProfileComponents/FriendsList';

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
                    username='Firstname Lastname'

                    bio='This is some text in a paragraph about a user of the dream journal app and is their home for sharing their dreams with
                     their freinds. This is a super great way to do it because if you have a dream and want to share that dream with your 
                     friends, you can create a post about it on this app.'

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