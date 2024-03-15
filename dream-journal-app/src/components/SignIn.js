// Import React
import React from 'react';

// Import Styles
import style from '../styles/styles.module.css';

export default function SignIn(props) {
    return (
        <main>
            <div className={style.grid}>
                <section className={style.signInFormSection}>
                    <div className={style.container}>
                        <h1>Sign In</h1>
                    </div>
                    
                    <div className={style.container}>
                        <form action='#' onSubmit={props.handleSubmit}>
                            <input className={style.textField} type='text' placeholder='Username' />
                            <input className={style.textField} type='password' placeholder='Password' />
                            <input className={style.btnPrimary} type='submit' />
                        </form>
                    </div>

                    <hr />

                    <div className={style.container}>
                        <p>If you don't have an account, click the button below to sign up.</p>
                    </div>

                    <div className={style.container}>
                        <button className={style.btn} onClick={props.handleSignUp}>Sign Up</button>
                    </div>
                </section>
            </div>
        </main>
    )
}