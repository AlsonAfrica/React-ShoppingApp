import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';  // Import the icon you want to use
import AboutPopup from './Popup-info';
import PrivacyCookiesPopup from './PrivacyCookies';

const Navbar = () => {
  const [openAboutPopup, setOpenAboutPopup] = useState(false);
  const [openPrivacyPopup, setOpenPrivacyPopup] = useState(false);

  const handleOpenAboutPopup = () => setOpenAboutPopup(true);
  const handleCloseAboutPopup = () => setOpenAboutPopup(false);
  const handleOpenPrivacyPopup = () => setOpenPrivacyPopup(true);
  const handleClosePrivacyPopup = () => setOpenPrivacyPopup(false);

  return (
    <>
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
            <Button color="inherit" onClick={handleOpenPrivacyPopup}>T & C's</Button>
            <Button color="inherit" onClick={handleOpenAboutPopup}>About</Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Render AboutPopup and PrivacyCookiesPopup components */}
      <AboutPopup open={openAboutPopup} onClose={handleCloseAboutPopup} />
      <PrivacyCookiesPopup open={openPrivacyPopup} onClose={handleClosePrivacyPopup} />
    </>
  );
};

export default Navbar;
