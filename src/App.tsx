import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

function App() {
  return (
    <div className="App">
      <HeaderContainer />//don't change
      <NavbarContainer />
        <div>
          <Route path='./message' render={<ProfileContainer />} />
        </div>
      <FooterContainer />//don't change
    </div>
  );
}

export default App;
