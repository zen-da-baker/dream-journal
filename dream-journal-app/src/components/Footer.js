// Import React
import React from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

export default function Footer() {
    return (
        <footer id={style.footerGrid}>

            <div id={style.footerLeft} className={style.container}>
                <h3>Help</h3>

                <ul className={style.footerLinks}>
                    <li>FAQ</li>
                </ul>
            </div>


            <div id={style.footerCenter} className={style.container}>
                <h3>About Dream Journal</h3>

                <ul className={style.footerLinks}>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Mission Statement</li>
                </ul>
            </div>

            <div id={style.footerRight} className={style.container}>
                <h3>Newsletter</h3>

                <p>Join our newsletter to hear about the latest features coming to our app.</p>

                <form>
                    <input className={style.textField} type='text' placeholder='Your email address' />
                    <input className={style.btnPrimary} type='submit' value='Submit' />
                </form>
            </div>
        </footer>
    )
}