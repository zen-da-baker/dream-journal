// Import data models
import { DreamModel } from "../models/DreamModel";

import { DreamsListModel } from "../models/DreamsListModel";

// Import helper functions
import { searchDreamById } from "./searchDreamById";
import { addNewDream } from "./addNewDream";

// Expects a dream that shares an id with an existing dream
export function saveDream(targetDream: DreamModel): void {

    const dreamsListJson: string | null = localStorage.getItem("dreamJournalDreamsList");

    if (dreamsListJson !== null) {

        // Extract the dream list from JSON
        const dreamsList: DreamsListModel = JSON.parse(dreamsListJson);

        const allDreams: Array<DreamModel> = dreamsList.allDreams;

        // Find the dream index in the list by the id
        const dreamIndex: number = searchDreamById(targetDream, allDreams);

        // If the dream index is known, update the dream at that index
        if (dreamIndex !== -1) {

            // Assign the dream at the known index to the target dream object
            allDreams[dreamIndex] = targetDream;

            // Stringify the dream list for storage
            const newDreamListJson: string = JSON.stringify(dreamsList);

            // Store the updated dream list
            localStorage.setItem("dreamJournalDreamsList", newDreamListJson);

        }

        // If the dream index is not known, add the dream
        if (dreamIndex === -1) {

            addNewDream(targetDream);

        }

    }


    
}