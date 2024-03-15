// Import React
import React from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

export default function Header(props) {
    return (
        <header>
            <nav className={style.container}>
                <button className={style.btn} onClick={props.handleUserProfile}>User Profile</button>
                <button className={style.btn} onClick={props.handleDiscover}>Discover</button>
                <button className={style.btn} onClick={props.handleFriends}>Friends</button>
                <button className={style.btnDanger} onClick={props.handleSignOut}>Sign Out</button>
            </nav>
        </header>
    )
}