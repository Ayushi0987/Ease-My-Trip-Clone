import axios from 'axios';
import React, { useState } from 'react'
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

export default function LoginRegister({open, onClose}) {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginRegister = async () => {
    try {
      if (isSignup) {
        // Signup API request 
        await axios.post('/api/signup', {username, password});
      } else {
        // Login API request
        await axios.post('/api/login', {username, password});
      }
      onClose(); // close dialog on success
    } catch (error) {
      console.error('Login Failed! Please try again', error)
    }
  }

  // const handleDialogOpen = () => {
  //   setDialogOpen(true);
  // };

  // const handleDialogClose = () => {
  //   setDialogOpen(false);
  // };

  return (
    <div className='loginRegister-comp'>
      {/* <Button onClick={handleDialogOpen}>
        {!isSignup ? 'Login' : 'Signup'}
      </Button> */}
      {/* Dialog for login/signup */}
      <Dialog open={open} onClose={onClose}>
          <DialogTitle>My Account</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Username"
              fullWidth
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLoginRegister} variant="contained" color="primary">
              {isSignup ? 'Sign Up' : 'Login'}
            </Button>
            <Button onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}
