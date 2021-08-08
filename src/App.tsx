import { Route } from 'react-router-dom'
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

function App() {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />
        <div className='app-wrapper-content'>
          <ProfileContainer />
        </div>
      <FooterContainer />
    </div>
  );
}

export default App;
