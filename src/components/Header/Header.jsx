import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  './Header.css'
// import imgSrc from './components/Header/EaseMyTrip_Logo'

const Header = () => {
  const [anchorE1, setAnchorE1] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = (e) =>{
    setAnchorE1(e.currentTarget);
  }

  const handleMenuClose = () =>{
    setAnchorE1(null)
  }

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  }

  const handleLoginLogout = () =>{
    if(loggedIn) {
      setLoggedIn(false);
      // handle logout logic here
    }
    else {
      handleNavigation('/login')
    }
  }

  return (
    // <AppBar position='static'>
      <Toolbar>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/EaseMyTrip_Logo.svg" alt="EaseMyTrip-Logo" 
          className="navbar-logo-img" />
        </div>
        <Button color='inherit' onClick={() => navigate('/flights')}>Flights</Button>
        <Button color='inherit' onClick={() => navigate('/hotels')}>Hotels</Button>
        <Button color='inherit' onClick={() => navigate('/hotels')}>Flights + Hotels</Button>
        <Button color='inherit' onClick={() => navigate('/trains')}>Trains</Button>
        <Button color='inherit' onClick={() => navigate('/buses')}>Buses</Button>
        <div className='flexgrow'></div>
        <IconButton color='inherit' onClick={handleMenuOpen}>
          <AccountCircle />
        </IconButton>
        <Menu 
          anchorEl={anchorE1}
          open={Boolean(anchorE1)}
          onClose={handleMenuClose}
        >
          {!loggedIn ? (
            <MenuItem onClick={handleLoginLogout}>Login or Signup</MenuItem>
          ) : (
            <>
              <MenuItem onClick={()=>handleNavigation('/bookingForm')}>My Booking</MenuItem>
              <MenuItem onClick={handleLoginLogout}></MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    // </AppBar>
  )
}
export default Header;