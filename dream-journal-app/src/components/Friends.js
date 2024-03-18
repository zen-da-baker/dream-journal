// Import React
import React from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

// Import Child Components
import FriendCard from './userProfileComponents/FriendCard';
import Search from './Search';

// Import User Data
import userData from '../demoUserData/demoUserData.json';

export default function Friends() {
    return (
        <main>
            <div className={style.pageGrid}>

            <div className={style.componentCard} id={style.searchContainer}>
                <div className={style.container}>
                    <Search />
                </div>
                
            </div>
            
            < div id={style.friendPageList} className={style.componentCard}>
                <FriendCard 
                    friendCardId={style.friendPageFriend1}
                    bannerSrc={userData.user2.banner}
                    pfpSrc={userData.user2.pfp}
                    friendName={userData.user2.username}
                    bioText={userData.user2.bio}
                />

                <FriendCard 
                    friendCardId={style.friendPageFriend2}
                    bannerSrc={userData.user3.banner}
                    pfpSrc={userData.user3.pfp}
                    friendName={userData.user3.username}
                    bioText={userData.user3.bio}
                />

                <FriendCard 
                    friendCardId={style.friendPageFriend3}
                    bannerSrc={userData.user4.banner}
                    pfpSrc={userData.user4.pfp}
                    friendName={userData.user4.username}
                    bioText={userData.user4.bio}
                />

                <FriendCard 
                    friendCardId={style.friendPageFriend4}
                    bannerSrc={userData.user5.banner}
                    pfpSrc={userData.user5.pfp}
                    friendName={userData.user5.username}
                    bioText={userData.user5.bio}
                />
            </div>
            
                
            </div>
        </main>
    )
}