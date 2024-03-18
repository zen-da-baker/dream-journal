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

    const [userInput, setUserInput] = useState('');

    function handleUserInput(event) {
        setUserInput(event.target.value);
    }

    function handlePost(userInput) {
        JSON.stringify(userInput)


        return alert('Post saved to database!');
    }

    // userData.user1.post.writeFile('../demoUserData/demoUserData.json', JSON.stringify(userInput));


    return (
        <main>
            <div className={style.pageGrid}>
                <ProfileBanner 
                    username={userData.user1.username}

                    bio={userData.user1.bio}

                    pfpSrc={userData.user1.pfp}

                    bannerSrc={userData.user1.banner}
                />

                <MonthDisplay 
                    postDisplay={handlePost}

                    databaseInput={userData.user1.post}
                />

                <DreamPost 
                    dateSelected={handleSelection}

                    handlePost={handlePost}

                    userInput={userInput}

                    handleUserInput={handleUserInput}
                />

                <FriendsList />
            </div>
        </main>
    )
}