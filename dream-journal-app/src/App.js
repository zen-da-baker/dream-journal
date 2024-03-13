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

  // Log In Authorization demo
  const password = 'enter';

  function handleSubmit(event) {
    const enterPassword = event.target.querySelector('input[type="password"]').value;
    const auth = enterPassword === password;
    setUserProfilePage(auth);
  }

  if (signUpPage === true) {
    return (
      <>
        <SignUp />
      </>
    )
  } else if (userProfilePage === true) {
    return (
      <>
        <Header  
          handleUserProfile={() => {
            setUserProfilePage(true);
          }}

          handleDiscover={() => {
            setUserProfilePage(false);
            setDiscoverPage(true);
          }}

          handleFriends={() => {
            setUserProfilePage(false);
            setFriendsListPage(true);
          }}

          handleSignOut={() => {
            setSignUpPage(false);
            setUserProfilePage(false);
            setDiscoverPage(false);
            setFriendsListPage(false);
          }}
        />

        <UserProfile />

        <Footer />
      </>
    )
  } else if (discoverPage === true) {
    return (
      <>
        <Header 
          handleUserProfile={() => {
            setUserProfilePage(true);
            setDiscoverPage(false);
          }}

          handleDiscover={() => {
            setDiscoverPage(true);
          }}

          handleFriends={() => {
            setDiscoverPage(false);
            setFriendsListPage(true);
          }}

          handleSignOut={() => {
            setSignUpPage(false);
            setUserProfilePage(false);
            setDiscoverPage(false);
            setFriendsListPage(false);
          }}
        />

        <Discover />

        <Footer />
      </>
    )
  } else if (friendsListPage === true) {
    return (
      <>
        <Header 
          handleUserPorfile={() => {
            setUserProfilePage(true);
            setFriendsListPage(false);
          }}

          handleDiscover={() => {
            setDiscoverPage(true);
            setFriendsListPage(false);
          }}

          handleFriends={() => {
            setFriendsListPage(true);
          }}

          handleSignOut={() => {
            setSignUpPage(false);
            setUserProfilePage(false);
            setDiscoverPage(false);
            setFriendsListPage(false);
          }}
        />

        <Friends />

        <Footer />
      </>
    )
  } else {
    return (
      <>
        <SignIn handleSubmit={handleSubmit} />
      </>
    )
  }
}

export default App;
