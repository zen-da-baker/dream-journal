

// Global State class used to create the global state object used throughout the entire app
export class GlobalState {

    username: string = "";

    currentPage: string = "tutorial start";

    constructor(

        prevState: any = {

            username: "",

            currentPage: "tutorial start"

        }) {

                this.username = prevState.username;

                this.currentPage = prevState.currentPage;

    }

    save() {

        const jsonData: string = JSON.stringify(this);

        localStorage.setItem("saveState", jsonData);

        console.log("Data saved")

    }

    load(): GlobalState {

        const jsonData: string | null = localStorage.getItem("saveState");

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