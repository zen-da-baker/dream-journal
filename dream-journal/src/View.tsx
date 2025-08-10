// Import global state and updating the global state
import { GlobalState } from "./models/GlobalState";
import { useGlobalState } from "./state/GlobalStateContext";

// Standard pages
import { CalendarPage } from "./pages/CalendarPage";
import { AllDreamsPage } from "./pages/AllDreamsPage";
import { SettingsPage } from "./pages/SettingsPage";

// The unknown page
import { UnknownPage } from "./pages/UnknownPage";

// View component for the user's window
export function View() {

    // Import the global state variable
    const globalState: GlobalState = useGlobalState();

    // Parse the current page from the global state
    const currentPage: string = globalState.currentPage;
    
    // The switch statement returns the page of the current page string 
    switch (currentPage) {

        /*
            Standard pages
        */
        case "calendar": 
            return <CalendarPage />

        case "all dreams":
            return <AllDreamsPage />
        
        case "settings":
            return <SettingsPage />

        // Default page when no match occures
        default: 
            return <UnknownPage />
    }
    
}