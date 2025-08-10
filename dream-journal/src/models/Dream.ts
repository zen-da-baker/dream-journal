/*
    The dream is the core data model of the app. It expect the app to generate an ID for searching. 
    The user inputs such as the date, the title, and body are optional.
*/
export class Dream {

    id: number;

    date: string;

    title: string;

    body: string;

    constructor(

        // The app is expected to generate an id for the dream for the user
        inputId: number, 
        
        // The title and body are expected to be entered by the user by there are default values in case either are not edited
        inputTitle: string = "Untitled Dream", 
        inputBody: string = "",

        // The default date will be the current day
        inputDate: string = new Date().toString()
    ) {

        this.id = inputId;

        this.title = inputTitle;

        this.body = inputBody;

        this.date = inputDate;

    }

}