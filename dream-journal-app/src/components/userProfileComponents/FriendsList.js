// Import React 
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

// Import Child Components
import FriendCard from './FriendCard';

// Import Database
import userData from '../../demoUserData/demoUserData.json';

export default function FriendsList(props) {

    

    return (
        <div id={style.friendsListComponent} className={style.grid}>
            <div className={style.componentCard}>
                <div className={style.profileGrid}>
                    <div id={style.friendListHeading}>
                        <div className={style.container}>
                            <h2>Friend List</h2>

                            <button className={style.btn} onClick={props.handleFriends}>Friends</button>
                        </div>
                        
                    </div>

                    <FriendCard 
                        friendCardId={style.friend1}

                        pfpSrc={props.user.friends[0].pfp}

                        bannerSrc={userData.user2.banner}
                        
                        friendName={props.user.friends[0].username}

                        bioText={userData.user2.bio}

                        handleView={props.handleView(userData.user2)}
                    />

                    <FriendCard
                        friendCardId={style.friend2}

                        pfpSrc={userData.user3.pfp}

                        bannerSrc={userData.user3.banner}
                        
                        friendName={userData.user3.username}

                        bioText={userData.user3.bio}

                        handleView={props.handleView(userData.user3)}
                    />

                    <FriendCard 
                        friendCardId={style.friend3}

                        pfpSrc={userData.user4.pfp}

                        bannerSrc={userData.user4.banner}
                        
                        friendName={userData.user4.username}

                        bioText={userData.user4.bio}

                        handleView={props.handleView(userData.user4)}
                    />

                    <FriendCard
                        friendCardId={style.friend4}

                        pfpSrc={userData.user5.pfp}

                        bannerSrc={userData.user5.banner}
                        
                        friendName={userData.user5.username}

                        bioText={userData.user5.bio}

                        handleView={props.handleView(userData.user5)}
                    />

                </div>
            </div>
        </div>
    )
}