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

                        pfpSrc='./images/Korra.png'

                        bannerSrc='./images/placeholder.webp'
                        
                        friendName='Friend 1'

                        bioText='This is some text from the first friend on the list.'
                    />

                    <FriendCard
                        friendCardId={style.friend2}

                        pfpSrc='./images/Korra.png'

                        bannerSrc='./images/Valorant.jpg'
                        
                        friendName='Friend 2'

                        bioText='This is the text of the second friend.'
                    />

                    <FriendCard 
                        friendCardId={style.friend3}

                        pfpSrc='./images/Korra.png'

                        bannerSrc='./images/Valorant.jpg'
                        
                        friendName='Friend 3'

                        bioText='This is the bio of the third friend.'
                    />

                    <FriendCard
                        friendCardId={style.friend4}

                        pfpSrc='./images/Korra.png'

                        bannerSrc='./images/Valorant.jpg'
                        
                        friendName='Friend 4'

                        bioText='This is the bio of the fourth friend.'
                    />

                </div>
            </div>
        </div>
    )
}