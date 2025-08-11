import "../styles/dreamCard.css";

// Data models
import { DreamModel } from "../models/DreamModel";

// Helper functions
import { loadDreamsList } from "../helpers/loadDreamsList";

// Import components
import { DreamSummaryCard } from "./DreamSummaryCard";

export function DreamsList() {

    // Extract the dreams from the local storage
    const allDreams: Array<DreamModel> = loadDreamsList();

    // Arrange the dreams in a gallery of summary card components
    const dreamsGalleryList = allDreams.map((dreamFile: DreamModel) => {

        return <DreamSummaryCard dream={ dreamFile } />

    })

    return (
        <div className="gallery">

            { dreamsGalleryList }

        </div>
    )
}