// Import React
import React from 'react';

// Import Styles
import style from '../styles/styles.module.css';

export default function Header(props) {
    return (
        <header>
            <h3>Header</h3>

            <button className={style.btn} onClick={props.handleUserProfile}>User Profile</button>
            <button className={style.btn} onClick={props.handleDiscover}>Discover</button>
            <button className={style.btn} onClick={props.handleFriends}>Friends</button>
            <button className={style.btnDanger} onClick={props.handleSignOut}>Sign Out</button>
        </header>
    )
}