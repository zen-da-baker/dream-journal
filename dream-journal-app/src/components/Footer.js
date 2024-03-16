// Import React
import React from 'react';

// Import Styles
import style from '../stylesheets/styles.module.css';

export default function Footer() {
    return (
        <footer id={style.footerGrid}>

            <div className={style.footerCard} id={style.footerLeft}>
                <h3 className={style.footerHeading}>Help</h3>

                <div className={style.columnContainer}>
                    <button className={style.btn}>FAQ</button>

                    <button className={style.btn}>App Guide</button>

                    <button className={style.btn}>Forum</button>
                </div>
            </div>


            <div className={style.footerCard} id={style.footerCenter}>
                <h3 className={style.footerHeading}>About Dream Journal</h3>

                    <div className={style.columnContainer}>
                        <button className={style.btn}>About Us</button>
                
                        <button className={style.btn}>Careers</button>
                    
                        <button className={style.btn}>Mission Statement</button>
                    </div>
            </div>

            <div className={style.footerCard} id={style.footerRight}>
                <h3 className={style.footerHeading}>Newsletter</h3>

                <br />

                <p>Join our newsletter to hear about the latest features coming to our app.</p>

                <form>
                    <div className={style.container}>
                        <input className={style.textField} type='text' placeholder='Your email address' />
                        <input className={style.btnPrimary} type='submit' value='Submit' />
                    </div>
                </form>
            </div>
        </footer>
    )
}