// Import local state management
import { useState } from "react";

// Import data models
import { DreamModel } from "../models/DreamModel";

// Import helper functions
import { saveDream } from "../helpers/saveDream";

// Import styling
import "../styles/dreamView.css";
import "../styles/text-input.css";

/*
    The dream view component takes in a dream of the dream model type and displays
    it in an expanded view if toggled
*/
export function DreamView({ dream } : { dream: DreamModel }) {

    // Local state toggles
    const [expandedView, setExpandedView] = useState<boolean>(false);
    const [editState, setEditState] = useState<boolean>(false);

    // Local state edits to the dream object
    const [title, setTitle] = useState<string>(dream.title);
    const [body, setBody] = useState<string>(dream.body);
    const [date, setDate] = useState<string>(dream.date);

    // Toggle the expanded view of the dream
    function toggleExpandedView() {

        setExpandedView((prevState: boolean) => {

            return !prevState;

        })

    }

    function toggleEditState() {

        setEditState((prevState: boolean) => {

            return !prevState;

        })

    }

    function handleTitleEdit(event: any) {

        setTitle(event.target.value);

    }

    function handleBodyEdit(event: any) {

        setBody(event.target.value);

    }

    function handleDateEdit(event: any) {

        setDate(event.target.value);

    }

    function handleSaveDream() {

        // Check if the edit fields are empty and apply changes if not empty
        if (title.length !== 0 && body.length !== 0 && date.length !== 0) {

            // Assign the fields of the dream
            dream.title = title;

            dream.body = body;

            dream.date = date;

            saveDream(dream);

        }

        // Toggle the edit state
        toggleEditState();

    }

    if (expandedView) {

        if (editState) {

            return (
                <div className="dream-view">

                    <div>

                        <button className="btn" onClick={ handleSaveDream }>Save</button>

                        <button className="btn" onClick={ toggleEditState }>Cancel</button>

                    </div>

                    <input className="title text-input title-input" type="text" value={ title } onChange={ handleTitleEdit } />

                    <textarea className="text-input body-input" rows={ 20 } cols={ 40 } value={ body } onChange={ handleBodyEdit }>

                    </textarea>

                    <input type="datetime-local" value={ date } onChange={ handleDateEdit } />

                </div>
            )

        } else {
    
            return (
                <div className="dream-view">

                    <div>

                        <button className="btn" onClick={ toggleExpandedView }>Close</button>

                        <button className="btn" onClick={ toggleEditState }>Edit</button>
                    
                    </div>
                    
                    <h2 className="title">{ dream.title }</h2>

                    <p>{ dream.body }</p>

                </div>
            )

        }

    } else {
        return (
            <button className="btn" onClick={ toggleExpandedView }>View</button>
        )
    }
}