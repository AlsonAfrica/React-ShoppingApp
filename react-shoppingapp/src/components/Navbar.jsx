import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';  // Import the icon you want to use

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#F4989C' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {/* Icon instead of Logo */}
            <IconButton color="inherit">
              <HomeIcon style={{ fontSize: '40px' }} />
            </IconButton>
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Buttons */}
          <Button color="inherit">T & C's</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
