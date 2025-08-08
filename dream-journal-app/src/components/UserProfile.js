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
/*
import userData from '../demoUserData/demoUserData.json';
import fs from 'node:fs';
*/

export default function UserProfile(props) {

    const [selected, setSelected] = useState(false);

    function handleSelection() {
        setSelected(true);
        return selected;
    }

    const [userInput, setUserInput] = useState('');

    function handleUserInput(event) {
        setUserInput(event.target.value);

        /*
        const fs = require('fs');
        const fileName = '../demoUserData/demoUserData.json';
        const file = require(fileName);

        file.key = userInput;

        fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
            if (err) return console.log(err);
            console.log(JSON.stringify(file));
            console.log('Writing to ' + fileName);
        })
            */
    }

    function handlePost(userInput) {
        let post = userInput;

        return (
            <p>{post}</p>
        )
    }

    function displayPost() {
        if (userInput) {
            return (
                <p>{userInput}</p>
            )
        }
    }

    // userData.user1.post.writeFile('../demoUserData/demoUserData.json', JSON.stringify(userInput));


    return (
        <main>
            <div className={style.pageGrid}>
                <ProfileBanner 
                    username={props.user.username}

                    bio={props.user.bio}

                    pfpSrc={props.user.pfp}

                    bannerSrc={props.user.banner}
                />

                <MonthDisplay 
                    postDisplay={handlePost}

                    databaseInput={props.user.post}
                />

                <DreamPost 
                    dateSelected={handleSelection}

                    handlePost={handlePost}

                    userInput={userInput}

                    handleUserInput={handleUserInput}

                    displayPost={displayPost}
                />

                <FriendsList 
                    handleFriends={props.handleFriends}

                    handleView={props.handleView}

                    friends={props.friends}

                    user={props.user}
                />
            </div>
        </main>
    )
}