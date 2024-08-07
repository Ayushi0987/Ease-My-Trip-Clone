import { AccountCircle } from "@mui/icons-material";
import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Toolbar,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import LoginRegister from "../LoginRegister/LoginRegister";


const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false); // State to manage dialog visibility
  const [anchorE1, setAnchorE1] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuOpen = (e) => {
    setAnchorE1(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorE1(null);
  };

  // const handleLogin = () => {
  //   if(!loggedIn){
  //    handleDialogOpen();
  //    handleNavigation('/login')
  //   }
  //   setLoggedIn(true); // Example, set loggedIn to true after successful login
  //   handleDialogClose();
  // }
  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleLoginLogout = () => {
    if (loggedIn) {
      setLoggedIn(false);
      navigate('/')
      // handle logout logic here
    } else {
      // handleNavigation("/login");
      setDialogOpen(true); // Open dialog for login or signup
    }
  };

  return (
    // <AppBar position='static'>
    <>
    <Toolbar>
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f8/EaseMyTrip_Logo.svg"
          alt="EaseMyTrip-Logo"
          className="navbar-logo-img"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="nav-btn">
        <Button
          color="inherit"
          onClick={() => navigate("/flights")}
          className={location.pathname === "/flights" ? "active" : ""}
        >
          Flights
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/hotels")}
          className={location.pathname === "/hotels" ? "active" : ""}
        >
          Hotels
        </Button>
        <Button 
          color="inherit" 
          onClick={() => navigate("/hotels")}
          className={location.pathname === '/flights-hotels' ? 'active' : ''}
        >
          Flights + Hotels
        </Button>
        <Button 
          color="inherit" 
          onClick={() => navigate("/trains")}
          className={location.pathname === '/trains' ? 'active' : ''}
        >
          Trains
        </Button>
        <Button 
          color="inherit" 
          onClick={() => navigate("/buses")}
          className={location.pathname === '/buses' ? 'active' : ''}
        >
          Buses
        </Button>
      </div>
      <div className="flexgrow"></div>
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <AccountCircle />
        <Typography variant="body1" style={{ marginLeft: 8 }}>
        { 'My Account'}
        </Typography>
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
            <MenuItem onClick={() => handleNavigation("/bookingForm")}>
              My Booking
            </MenuItem>
            <MenuItem onClick={handleLoginLogout}></MenuItem>
          </>
        )}
      </Menu>
      </Toolbar>
      {/* Integrate the LoginRegister component */}
      <LoginRegister open={dialogOpen} onClose={() => setDialogOpen(false)} />
     </>
  );
  
};
export default Header;
