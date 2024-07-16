import React, { useContext } from 'react'
import "./navBar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import GridViewIcon from '@mui/icons-material/GridView';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import DP from "../../assets/manjpeg.jpeg"
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';
import propic2 from "../../assets/manjpeg.jpeg"

const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="left">
       <Link to="/" style={{textDecoration:"none"}}>
       <span>Vilo Book</span>
       
       </Link>
       <HomeIcon/>
      {darkMode ? <WbSunnyIcon onClick={toggle}/> : <DarkModeIcon onClick={toggle} />}
       <GridViewIcon/>
      <div className="search">
        <SearchIcon/>
        <input type='text' placeholder='search...'/>
      </div>
      </div>
      <div className="right">
        <PersonIcon/>
        <EmailIcon/>
        <NotificationsIcon/>
        <div className="user">
           <img src={propic2} alt=""/>
           <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
