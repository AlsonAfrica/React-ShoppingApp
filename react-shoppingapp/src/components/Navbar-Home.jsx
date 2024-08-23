import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress'; // Import the loader component

export default function NavbarHome() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false); // State for loader visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLoading(true); // Show the loader
    // Simulate a delay for logout process
    setTimeout(() => {
      // Perform any additional logout logic here, such as clearing tokens or user data
      setLoading(false); // Hide the loader
      navigate('/'); // Navigate to the homepage
    }, 1000); // Adjust the delay as needed
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#F4989C' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          {/* Replace this with your logo or icon */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <SettingsIcon fontSize="small" /> Settings
            </MenuItem>
            <MenuItem onClick={handleLogout} disabled={loading}>
              <LogoutIcon fontSize="small" /> Logout
              {loading && (
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                  <CircularProgress size={24} />
                </Box>
              )}
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
