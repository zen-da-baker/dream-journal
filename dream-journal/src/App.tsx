import { useState } from "react";

import logo from './logo.svg';
 
import './App.css';

import { AllDreamsPage } from './pages/AllDreamsPage';
import { CalendarPage } from "./pages/CalendarPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {

  const [currentPage, setCurrentPage] = useState<string>("calendar page");

  switch (currentPage) {

    case "calendar page":
      return <CalendarPage />

  }
   
  return (

    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

      </header>

    </div>

  );

}

export default App;
