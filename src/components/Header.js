import React from 'react'
import '../Styles/header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='logo' />
        </div>
        <div className='header_center'>
            <SearchIcon className='search_icon' />
            <input placeholder='Search mail' type='text' />
            <ArrowDropDownIcon className='header_inputCaret' />
        </div>
        <div className='header_right'>
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar />
        </div>
    </div>
  )
}

export default Header;