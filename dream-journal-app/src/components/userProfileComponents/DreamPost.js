// Import React
import React from 'react';

// Import Styles
import style from '../../stylesheets/styles.module.css';

export default function DreamPost(props) {

    if (props.dateSelected === true) {
        return (
            <div id={style.postComponent} className={style.grid}>
                <div className={style.componentCard}>
                    <h2>Post Component Selected</h2>
                </div>
            </div>
        )
    } else {
        return (
            <div id={style.postComponent} className={style.grid}>
                <div className={style.componentCard}>
                    <h2>Post Component Not Selected</h2>

                    <input type='text' className={style.textField} placeholder='Title' />

                    <textarea type='text' className={style.textField} placeholder='Body text' id={style.formPost} rows='5' value={props.userInput} onChange={props.handleUserInput} ></textarea>

                    <input type='submit' className={style.btn} value='Submit' post={props.handlePost} />
                </div>
            </div>
        )
    }
}