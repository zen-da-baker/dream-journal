// import local state for this component
import { useState } from "react";

// Import data models
import { DreamModel } from "../models/DreamModel";

// Import helper functions
import { addNewDream } from "../helpers/addNewDream";

export function NewDream() {

    // Edit state of this component
    const [editState, setEditState] = useState<boolean>(false);

    // Text input for the title and body of the dream
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    // The date input of the dream which defaults to the current day
    const [date, setDate] = useState<string>(new Date().toString());

    // Toggle the edit state of the component
    function switchEditState() {

        setEditState((prevState: boolean) => {

            return !prevState;

        })

    }

    // Save the input to a new dream, adding it to the list of dreams
    function handleSave() {

        // User needs input or else the dream will not be added to the list
        if (title.length !== 0 && body.length !== 0 && date.length !== 0) {

            const completeDream: DreamModel = new DreamModel(title, body, date);

            addNewDream(completeDream);


            switchEditState()

        }

    }

    function handleTitleEdit(event: any) {

        setTitle(event.target.value);

    }

    function handleBodyEdit(event: any) {

        setBody(event.target.value);

    }

    function handleDateEdit(event: any) {

        console.log(event.target.value)

        const date = new Date(event.target.value);

        console.log(date)

        const newDateString = date.toISOString();

        setDate(event.target.value);

    }

    if (editState) {

        return (
            <div>

                <input type="text" placeholder="Title..." value={ title } onChange={ handleTitleEdit } />

                <textarea placeholder="Dream details..." value={ body } onChange={ handleBodyEdit } >

                </textarea>

                <input type="datetime-local" value={ date } onChange={ handleDateEdit } />

                <button onClick={ switchEditState }>Cancel</button>

                <button onClick={ handleSave }>Save</button>

            </div>
        )

    } else {

        return (
            <button onClick={ switchEditState }>New Dream</button>
        )

    }

}