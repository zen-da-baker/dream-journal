// Import data models
import { DreamModel } from "../models/DreamModel";

// Helper functions
import { displayDate } from "../helpers/displayDate";

// Import components
import { DreamView } from "./DreamView";

export function DreamSummaryCard({ dream }: { dream: DreamModel }) {

    // Format the date string 
    const dateText = displayDate(dream.date);

    return (
        <div className="dream-card" key={ dream.id }>

            <h3>{ dream.title }</h3>

            <p>{ dateText }</p>

            <DreamView dream={ dream } />

        </div>
    )

}