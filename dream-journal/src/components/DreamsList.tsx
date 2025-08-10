import "../styles/dreamCard.css";

// Data models
import { DreamModel } from "../models/DreamModel";

// Helper functions
import { loadDreamsList } from "../helpers/loadDreamsList";

// Import components
import { DreamSummaryCard } from "./DreamSummaryCard";

export function DreamsList() {

    const allDreams: Array<DreamModel> = loadDreamsList();

    const dreamsGalleryList = allDreams.map((dreamFile: DreamModel) => {

        return <DreamSummaryCard dream={ dreamFile } />

    })

    return (
        <div>
            { dreamsGalleryList }
        </div>
    )
}