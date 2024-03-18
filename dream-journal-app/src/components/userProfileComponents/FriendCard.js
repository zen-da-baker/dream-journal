// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function FriendCard(props) {
    return (
        <div id={props.friendCardId} className={style.friendCard}>
            <div id={style.friendBanner} className={style.imgContainer}>
                <img src={props.bannerSrc} alt='Banner icon' />
            </div>

            <div id={style.friendPfp} className={style.imgContainer}>
                    <img src={props.pfpSrc} alt='Profile icon' />
            </div>

            <div id={style.friendUsername}>
                <h3>{props.friendName}</h3>
            </div>

            <div id={style.bioElement}>
                <p>{props.bioText}</p>
            </div>
            
            <div id={style.viewProfile}>
                <button className={style.btn} onClick={props.handleView}>View Profile</button>
            </div>

        </div>
    )
}