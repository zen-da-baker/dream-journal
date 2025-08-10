import { Dream } from "../models/Dream";

export function loadDreamsList() {

    const dreamsListJson: string | null = localStorage.getItem("dreamJournalDreams");

    if (dreamsListJson !== null) {

        const dreamsList = JSON.parse(dreamsListJson);

    }
}