// Import data models
import { DreamModel } from "../models/DreamModel";

/*
    This function checks if a target ID number already exists in the dreams
    list. If it does not, the same number is simply passed through.
*/
export function checkExistingId(targetId: number, allDreams: Array<DreamModel>): number {

    // Iterate through the dream list linearly
    for (let i = 0; i < allDreams.length; i++) {
     
        // If target id already exists, iterate up one and recusively call the function
        if (targetId === allDreams[i].id) {

            targetId++;

            // If a match is found, recursively call the function and get its value
            targetId = checkExistingId(targetId, allDreams);

        }

    }

    // Return target id number
    return targetId;

}