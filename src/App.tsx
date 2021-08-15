import './App.css';
import { BrowserRouter } from 'react-router-dom'
import {Switch} from 'react-router'
import { Route } from 'react-router-dom'

import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
  return (
    <BrowserRouter>
     <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path="/profile" render={() => <ProfileContainer />}/>
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
          </Switch>
        </div>
        <FooterContainer />
     </div>
    </BrowserRouter>
  );
}


export default App;
