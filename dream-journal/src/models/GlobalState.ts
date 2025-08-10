

// Global State class used to create the global state object used throughout the entire app
export class GlobalState {

    username: string = "";

    currentPage: string = "all dreams";

    constructor(

        prevState: any = {

            username: "",

            currentPage: "all dreams"

        }) {

                this.username = prevState.username;

                this.currentPage = prevState.currentPage;

    }

    save() {

        const jsonData: string = JSON.stringify(this);

        localStorage.setItem("dreamJournalSaveState", jsonData);

        console.log("Data saved")

    }

    load(): GlobalState {

        const jsonData: string | null = localStorage.getItem("dreamJournalSaveState");

        console.log(jsonData);

        if (jsonData !== null) {

            const prevState = JSON.parse(jsonData);

            this.username = prevState.username;

            this.currentPage = prevState.currentPage;

            console.log("Data loaded")

        }

        return this

    }
    
}