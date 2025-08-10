// Import React and its hooks
import React, { useState, useContext } from 'react';

// Import current transactions

import { GlobalState } from "../models/GlobalState";

// Create context for total state
const stateExample = new GlobalState();

const StateContext = React.createContext(stateExample);

const UpdateStateContext = React.createContext((string: any) => console.log(string));

// Create context for global state and updating global state
export function useGlobalState() {
    return useContext(StateContext);
}

export function useSetGlobalState() {
    return useContext(UpdateStateContext);
}

function checkForData(): GlobalState {

    const initialState: GlobalState = new GlobalState();

    const loadedState = initialState.load();

    return loadedState;

}

// Create the main state provider for the parent level App component so all other components can access the state in this file
export function GlobalStateContext({ children } : any) {

    // Initialize the loaded state variable
    /*
    let loadState: GlobalState = new GlobalState();

    useEffect(() => {

        const newLoadState = loadState.load();

        console.log(loadState);

        console.log(newLoadState);

        console.log("state loaded from context");

    }, [])
    */
    

    const [globalState, setGlobalState] = useState<GlobalState>(checkForData());
    
    // Nested context for the main App component
    return (
        <StateContext.Provider value={ globalState }>
            <UpdateStateContext.Provider value={ setGlobalState }>
                {
                    children
                }
            </UpdateStateContext.Provider>
        </StateContext.Provider>
    )
}