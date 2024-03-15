// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function FriendCard(props) {
    return (
        <div className={style.friendCard}>
            <h3>{props.friendName}</h3>
        </div>
    )
}