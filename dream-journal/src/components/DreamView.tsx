// Import local state management
import { useState } from "react";

// Import data models
import { DreamModel } from "../models/DreamModel";

// Import styling
import "../styles/dreamView.css";

/*
    The dream view component takes in a dream of the dream model type and displays
    it in an expanded view if toggled
*/
export function DreamView({ dream } : { dream: DreamModel }) {

    const [expandedView, setExpandedView] = useState<boolean>(false);
    const [editState, setEditState] = useState<boolean>(false);

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

    if (expandedView) {

        if (editState) {

            return (
                <div className="dream-view">

                    <button>Save</button>

                    <button onClick={ toggleEditState }>Cancel</button>

                    <input type="text" />

                    <textarea>

                    </textarea>

                </div>
            )

        } else {
    
            return (
                <div className="dream-view">

                    <button onClick={ toggleExpandedView }>Close</button>

                    <button onClick={ toggleEditState }>Edit</button>

                    <h2>{ dream.title }</h2>

                    <p>{ dream.body }</p>

                </div>
            )

        }

    } else {
        return (
            <button onClick={ toggleExpandedView }>View</button>
        )
    }
}