import { Route } from 'react-router-dom'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Switch } from 'react-router'

import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path="/dialogs" component={() => < DialogsContainer />} />
            <Route path="/profile" component={() => <ProfileContainer />}/>
          </Switch>
         </div>
        <FooterContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
