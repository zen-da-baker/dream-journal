// Import React
import React from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>FAQ</li>
                    <li>Mission Statement</li>
                </ul>
            </div>
        </footer>
    )
}