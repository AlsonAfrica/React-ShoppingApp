// AboutPopup.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const AboutPopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>About ShopList</DialogTitle>
      <DialogContent>
        <p>
          ShopList is the ultimate shopping companion, keeping your grocery list synced across all your devices for easy access anytime, anywhere.
          With features designed to make your grocery shopping effortless, ShopList ensures you never forget a grocery item again.
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutPopup;
