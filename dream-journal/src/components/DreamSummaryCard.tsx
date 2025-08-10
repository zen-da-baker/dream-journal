// Import data models
import { DreamModel } from "../models/DreamModel";

import { displayDate } from "../helpers/displayDate";

export function DreamSummaryCard({ dream }: { dream: DreamModel }) {

    const dateText = displayDate(dream.date);

    return (
        <div className="dream-card" key={ dream.id }>

            <h3>{ dream.title }</h3>

            <p>{ dateText }</p>

            <button>View Dream</button>

        </div>
    )

}