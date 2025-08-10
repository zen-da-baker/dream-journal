// Import data models
import { DreamsListModel } from "../models/DreamsListModel";
import { DreamModel } from "../models/DreamModel";

// Import helper functions
import { checkExistingId } from "./checkExistingId";

export function generateDreamId(): number {

    let idNumber = 0;

    const dreamsListJson: string | null = localStorage.getItem("dreamJournalDreamsList");

    if (dreamsListJson !== null) {

        const dreamsList: DreamsListModel = JSON.parse(dreamsListJson);

        const allDreams: Array<DreamModel> = dreamsList.allDreams;

        idNumber = allDreams.length;

        idNumber = checkExistingId(idNumber, allDreams);

    }

    return idNumber;
    
}