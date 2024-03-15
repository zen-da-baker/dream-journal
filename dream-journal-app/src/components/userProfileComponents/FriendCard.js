// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function FriendCard(props) {
    return (
        <div id={props.friendCardId} className={style.friendCard}>
            <h3>{props.friendName}</h3>
        </div>
    )
}