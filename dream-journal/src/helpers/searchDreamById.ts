import { DreamModel } from "../models/DreamModel";

/*
    This function takes in a target dream and searches by the id number to find
    the dream's position in the given dream list. 
    If the dream is found, the index number of the dream is returned. 
    If the dream is not found, a negative number is returned. 
    The result can be used to determine adding, editing, or removing a dream.
*/
export function searchDreamById(targetDream: DreamModel, allDreams: Array<DreamModel>): number {

    // Iterate through the dream list linearly
    for (let i = 0; i < allDreams.length; i++) {

        // If the target dream id is a match, return the index number
        if (targetDream.id === allDreams[i].id) {

            // Expected to return a positive number
            return i;

        }

    }

    // Returns a negative number if the loop executes and the id was not found
    return -1;

}