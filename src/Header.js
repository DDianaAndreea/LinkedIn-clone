import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HeaderOption from './HeaderOption';
import { useDispatch} from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () =>{
        dispatch(logout());
        auth.signOut();
    }

  return (
    <div className='header'>
        <div className='header_left'>
            <img 
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-64.png" 
                alt=""
            />
        
            <div className='header_search'>
                <SearchIcon/>
                <input placeholder='Search' type='text'></input>
            </div>
        
        </div>

        <div className='header_right'>
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={MessageIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar={true}
            title='me'
            onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header
