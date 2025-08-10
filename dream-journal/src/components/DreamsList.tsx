// Data models
import { DreamModel } from "../models/DreamModel";

// Helper functions
import { loadDreamsList } from "../helpers/loadDreamsList";

export function DreamsList() {

    const allDreams: Array<DreamModel> = loadDreamsList();

    const dreamsGalleryList = allDreams.map((dreamFile: DreamModel) => {

        return (
            <div>
                <h3>{ dreamFile.title }</h3>

                <p>{ dreamFile.date }</p>
            </div>
        )

    })

    return (
        <div>
            { dreamsGalleryList }
        </div>
    )
}