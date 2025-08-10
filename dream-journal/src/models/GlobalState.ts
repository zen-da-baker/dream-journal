// Import data models
import { IngredientModel } from "./IngredientModel";
import { RecipeModel } from "./RecipeModel";
import { PremiumFeaturesModel } from "./PremiumFeaturesModel";

// Global State class used to create the global state object used throughout the entire app
export class GlobalState {

    username: string = "";

    tutorialCompleted: boolean = false;

    ingredientList: Array<IngredientModel> = [];

    groceryList: Array<string> = [];

    plannedMeals: Array<RecipeModel> = [];

    allPremiumFeatures: Array<PremiumFeaturesModel> = [];

    currentPage: string = "tutorial start";

    constructor(

        prevState: any = {

            username: "",

            tutorialCompleted: false,

            ingredientList: [],

            groceryList: [],

            plannedMeals: [],

            allPremiumFeatures: [],

            currentPage: "tutorial start"

        }) {

                this.username = prevState.username;

                this.tutorialCompleted = prevState.tutorialCompleted;

                this.ingredientList = prevState.ingredientList;

                this.groceryList = prevState.groceryList;

                this.plannedMeals = prevState.plannedMeals;

                this.allPremiumFeatures = prevState.allPremiumFeatures;

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

            this.tutorialCompleted = prevState.tutorialCompleted;

            this.ingredientList = prevState.ingredientList;

            this.groceryList = prevState.groceryList;

            this.plannedMeals = prevState.plannedMeals;

            this.currentPage = prevState.currentPage;

            this.allPremiumFeatures = prevState.allPremiumFeatures;

            console.log("Data loaded")

        }

        return this

    }
    
}