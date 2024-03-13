import React from 'react';

export default function SignIn(props) {
    return (
        <div>
            <h1>Sign In</h1>

            <form action='#' onSubmit={props.handleSubmit}>
                <input type='password' placeholder='Password' />
                <input type='submit' />
            </form>

            <p>If you don't have an account, sign up here.</p>
        </div>
        
    )
}