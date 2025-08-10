

// import view of the user screen as a single component
import { View } from './View';

// import global state context to be used across the entire application
import { GlobalStateContext } from './state/GlobalStateContext';

function App() {

  // Return the application view wrapped in the global state context
  return (
    <GlobalStateContext>
      
      <View />

    </GlobalStateContext>
  )
          
}

// Export the app to the index file and the HTML page
export default App;
