// Import data models
import { DreamsListModel } from "../models/DreamsListModel";
import { DreamModel } from "../models/DreamModel";

// Import helper functions
import { checkExistingId } from "./checkExistingId";

export function generateDreamId(): number {

    // Initialize the id number
    let idNumber = 0;

    // Check if the dream list exists
    const dreamsListJson: string | null = localStorage.getItem("dreamJournalDreamsList");

    // If the dream list exists, parse it
    if (dreamsListJson !== null) {

        const dreamsList: DreamsListModel = JSON.parse(dreamsListJson);

        const allDreams: Array<DreamModel> = dreamsList.allDreams;

        // Initialize the id number to be the next index of the array
        idNumber = allDreams.length;

        // Check if the id number is already in use and iterate otherwise
        idNumber = checkExistingId(idNumber, allDreams);

    }

    // Return the id number weather a list exists or not
    return idNumber;
    
}