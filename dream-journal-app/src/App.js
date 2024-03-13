// React
import React, { useState } from 'react';

// Logo and Default CSS
import logo from './logo.svg';
import './App.css';

function App() {

  // Page States
  const [signUpPage, setSignUpPage] = useState(false);
  const [userProfilePage, setUserProfilePage] = useState(false);
  const [discoverPage, setDiscoverPage] = useState(false);
  const [friendsListPage, setFriendsListPage] = useState(false);

  if (signUpPage === true) {
    return (
      <>
        <SignUp />
      </>
    )
  } else if (userProfilePage === true) {
    return (
      <>
        <Header />
        <UserProfile />
        <Footer />
      </>
    )
  } else if (discoverPage === true) {
    return (
      <>
        <Header />
        <Discover />
        <Footer />
      </>
    )
  } else if (friendsListPage === true) {
    return (
      <>
        <Header />
        <Friends />
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <SignIn />
      </>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
