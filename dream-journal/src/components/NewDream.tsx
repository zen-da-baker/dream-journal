// import local state for this component
import { useState } from "react";

// Import data models
import { DreamModel } from "../models/DreamModel";

export function NewDream() {

    // Edit state of this component
    const [editState, setEditState] = useState<boolean>(false);

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [date, setDate] = useState<string>("");

    function switchEditState() {

        setEditState((prevState: boolean) => {

            return !prevState;

        })

    }

    function handleSave() {

        const completeDream: DreamModel = new DreamModel(title, body, date)


        switchEditState()

    }

    if (editState) {

        return (
            <div>

                <input type="text" placeholder="Title..." />

                <textarea placeholder="Dream details...">

                </textarea>

                <input type="datetime-local" />

                <button onClick={ handleSave }>Save</button>

            </div>
        )

    } else {

        return (
            <button onClick={ switchEditState }>New Dream</button>
        )

    }

}