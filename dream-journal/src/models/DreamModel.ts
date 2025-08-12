// Import ID assignment
import { generateDreamId } from "../helpers/generateDreamId";

/*
    The dream is the core data model of the app. It expect the app to generate an ID for searching. 
    The user inputs such as the date, the title, and body are optional.

    This data model is expected to be parsed from JSON directly so it will have no methods. 
    Any functionality related to the dream model will be handled by the components in React.
*/
export class DreamModel {

    id: number;

    date: string;

    title: string;

    body: string;

    tags?: Array<string> = [];

    happyDream?: boolean = true;

    constructor(

        // The title and body are expected to be entered by the user by there are default values in case either are not edited
        inputTitle: string = "Untitled Dream", 
        inputBody: string = "",

        // The default date will be the current day
        inputDate: string = new Date().toString(),

        // The app is expected to generate an id for the dream for the user
        inputId: number = generateDreamId()
        
    ) {

        this.id = inputId;

        this.title = inputTitle;

        this.body = inputBody;

        this.date = inputDate;

    }

}