import React from 'react'
import '../Styles/header.scss';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='logo' />
        </div>
        <div className='header_center'></div>
        <div className='header_right'></div>
    </div>
  )
}

export default Header;