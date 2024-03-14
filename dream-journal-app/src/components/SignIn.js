// Import React
import React from 'react';

// Import Styles
import style from '../styles/styles.module.css';

export default function SignIn(props) {
    return (
        <div className={style.container}>
            <section>

            
                <h1>Sign In</h1>

                <form action='#' onSubmit={props.handleSubmit}>
                    <input className={style.textField} type='password' placeholder='Password' />
                    <input className={style.btn} type='submit' />
                </form>

                <p>If you don't have an account, sign up here.</p>
            </section>
        </div>
        
    )
}