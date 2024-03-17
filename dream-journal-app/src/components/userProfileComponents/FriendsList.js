// Import React 
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

// Import Child Components
import FriendCard from './FriendCard';

// Import Database
import userData from '../../demoUserData/demoUserData.json';

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

                        pfpSrc={userData.user2.pfp}

                        bannerSrc={userData.user2.banner}
                        
                        friendName={userData.user2.username}

                        bioText={userData.user2.bio}
                    />

                    <FriendCard
                        friendCardId={style.friend2}

                        pfpSrc={userData.user3.pfp}

                        bannerSrc={userData.user3.banner}
                        
                        friendName={userData.user3.username}

                        bioText={userData.user3.bio}
                    />

                    <FriendCard 
                        friendCardId={style.friend3}

                        pfpSrc={userData.user4.pfp}

                        bannerSrc={userData.user4.banner}
                        
                        friendName={userData.user4.username}

                        bioText={userData.user4.bio}
                    />

                    <FriendCard
                        friendCardId={style.friend4}

                        pfpSrc={userData.user5.pfp}

                        bannerSrc={userData.user5.banner}
                        
                        friendName={userData.user5.username}

                        bioText={userData.user5.bio}
                    />

                </div>
            </div>
        </div>
    )
}