// Import React
import React, { useState } from 'react';

// Import Page Component
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import Discover from './components/Discover';
import Friends from './components/Friends';

// Import Header and Footer
import Header from './components/Header';
import Footer from './components/Footer';

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
}

export default App;
