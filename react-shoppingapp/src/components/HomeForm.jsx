import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hidePopup } from '../store/popupSlice';
import { Button, TextField, Typography, Container, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';  

const PopupOverlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PopupFormContainer = styled('div')(({ isFlipped }) => ({
  width: '500px',
  height: '400px',
  position: 'relative',
  perspective: '1000px',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
}));

const PopupFormInner = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
});

const PopupFormSide = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '120%',
  backfaceVisibility: 'hidden',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor:'#CADCD7',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const PopupFormFront = styled(PopupFormSide)({
  zIndex: 2,
});

const PopupFormBack = styled(PopupFormSide)({
  transform: 'rotateY(180deg)',
});

const PopupForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const isVisible = useSelector((state) => state.popup.isVisible);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isVisible) return null;

  const toggleForm = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLogin = async () => {
    setLoading(true); // Show loader
    try {
      const response = await fetch('http://localhost:5001/users');
      const users = await response.json();

      const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

      if (user) {
        console.log('Login successful:', user);
        setTimeout(() => {
          setLoading(false); // Hide loader before navigating
          navigate('/HomePage');
        }, 500); // Delay to show loader
      } else {
        alert('Invalid username or password');
        setLoading(false); // Hide loader if login fails
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please try again.');
      setLoading(false); // Hide loader on error
    }
  };

  const handleRegister = async () => {
    if (registerPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user = {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    };

    try {
      const response = await fetch('http://localhost:5001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      alert('Registration successful!');
      setIsFlipped(false); // Flip back to login form after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <>
      {loading && <Loader />} 
      <PopupOverlay>
        <PopupFormContainer isFlipped={isFlipped}>
          <PopupFormInner>
            {/* Login Form */}
            <PopupFormFront>
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>
              <Container>
                <TextField
                  label="Username"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  onClick={handleLogin}
                  disabled={loading} // Disable button when loading
                >
                  {loading ? 'Loading...' : 'Login'}
                </Button>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                  marginTop="16px"
                  onClick={toggleForm}
                  style={{ cursor: 'pointer' }}
                >
                  Don't have an account? Register here
                </Typography>
              </Container>
            </PopupFormFront>

            {/* Registration Form */}
            <PopupFormBack>
              <Typography variant="h5" gutterBottom>
                Register
              </Typography>
              <Container>
                <TextField
                  label="Username"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                  Register
                </Button>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                  marginTop="16px"
                  onClick={toggleForm}
                  style={{ cursor: 'pointer' }}
                >
                  Already have an account? Login here
                </Typography>
              </Container>
            </PopupFormBack>
          </PopupFormInner>
          <IconButton
            onClick={() => dispatch(hidePopup())}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'black',
            }}
          >
            <Close />
          </IconButton>
        </PopupFormContainer>
      </PopupOverlay>
    </>
  );
};

export default PopupForm;
