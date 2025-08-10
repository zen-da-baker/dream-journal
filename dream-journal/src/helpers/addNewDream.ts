// Import data models
import { DreamModel } from "../models/DreamModel";

import { DreamsListModel } from "../models/DreamsListModel";

export function addNewDream(newDream: DreamModel): void {

    const dreamsListJson: string | null = localStorage.getItem("dreamJournalDreamsList");

    if (dreamsListJson !== null) {

        const dreamsList: DreamsListModel = JSON.parse(dreamsListJson);

        const allDreams = dreamsList.allDreams;

        allDreams.push(newDream);

        const newDreamsListJson: string = JSON.stringify(dreamsList);

        localStorage.setItem("dreamJournalDreamsList", newDreamsListJson);

    } else {

        const dreamsList = new DreamsListModel();

        const allDreams = dreamsList.allDreams;

        allDreams.push(newDream);

        const newDreamsListJson: string = JSON.stringify(dreamsList);

        localStorage.setItem("dreamJournalDreamsList", newDreamsListJson);

    }

    console.log("Dream saved");

}