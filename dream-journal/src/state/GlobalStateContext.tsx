// Import React and its hooks
import React, { useState, useContext } from 'react';

// Import current transactions

import { GlobalStateModel } from "../models/GlobalStateModel";

// Create context for total state
const stateExample = new GlobalStateModel();

const StateContext = React.createContext(stateExample);

const UpdateStateContext = React.createContext((string: any) => console.log(string));

// Create context for global state and updating global state
export function useGlobalState() {
    return useContext(StateContext);
}

export function useSetGlobalState() {
    return useContext(UpdateStateContext);
}

function checkForData(): GlobalStateModel {

    const initialState: GlobalStateModel = new GlobalStateModel();

    const loadedState = initialState.load();

    return loadedState;

}

// Create the main state provider for the parent level App component so all other components can access the state in this file
export function GlobalStateContext({ children } : any) {    

    const [globalState, setGlobalState] = useState<GlobalStateModel>(checkForData());
    
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