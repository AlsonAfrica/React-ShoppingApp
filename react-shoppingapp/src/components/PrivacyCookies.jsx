// PrivacyCookiesPopup.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const PrivacyCookiesPopup = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Privacy & Cookies</DialogTitle>
      <DialogContent>
        <p>
          At ShopList, we are committed to protecting your privacy and ensuring that your data is handled responsibly.
          We use cookies to enhance your browsing experience and provide personalized content. By using our website,
          you consent to our use of cookies in accordance with our Privacy Policy.
        </p>
        <p>
          <strong>Privacy Policy:</strong> Your personal information is stored securely and used only for the purposes
          of providing our services. We do not share your data with third parties without your consent.
        </p>
        <p>
          <strong>Cookies:</strong> We use cookies to remember your preferences and enhance your user experience.
          You can manage your cookie preferences through your browser settings.
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

export default PrivacyCookiesPopup;
