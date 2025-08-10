import { DreamModel } from "../models/DreamModel";
import { DreamsListModel } from "../models/DreamsListModel";

export function loadDreamsList(): Array<DreamModel> {

    const dreamsListJson: string | null = localStorage.getItem("dreamJournalDreams");

    if (dreamsListJson !== null) {

        const dreamsList: DreamsListModel = JSON.parse(dreamsListJson);

        const allDreams: Array<DreamModel> = dreamsList.allDreams;

        return allDreams;

    } else {

        const allDreams: Array<DreamModel> = [];

        return allDreams;

    }


}