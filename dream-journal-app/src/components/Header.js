// Import React
import React from 'react';

// Import Styles
import style from '../styles/styles.module.css';

export default function Header(props) {
    return (
        <header>
            <h3>Header</h3>

            <button onClick={props.handleUserProfile}>User Profile</button>
            <button onClick={props.handleDiscover}>Discover</button>
            <button onClick={props.handleFriends}>Friends</button>
            <button onClick={props.handleSignOut}>Sign Out</button>
        </header>
    )
}