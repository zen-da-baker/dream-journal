// Import React
import React from 'react';

// Import Styles
import style from '../styles/styles.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={style.container}>
                <h3>Footer</h3> 

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