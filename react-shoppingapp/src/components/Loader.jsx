// Loader.js
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      bgcolor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,  // High z-index to ensure it's on top
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

export default Loader;
