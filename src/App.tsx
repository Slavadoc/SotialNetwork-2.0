import './App.css';
import { BrowserRouter } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import FooterContainer from './components/Footer/FooterContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
  return (
     <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>

        </div>
        <FooterContainer />
     </div>
  );
}


export default App;
