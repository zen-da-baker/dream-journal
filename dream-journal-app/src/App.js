// React
import React, { useState } from 'react';

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
