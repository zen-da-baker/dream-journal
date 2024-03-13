import React from 'react';

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