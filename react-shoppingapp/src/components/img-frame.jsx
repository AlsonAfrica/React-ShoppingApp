import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import HeroImage from "../assets/Images/Hero.jpg"

const HeroPhoto = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',   
        alignItems: 'center',       
        height: '100vh',           
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: { xs: '90%', sm: '70%', md: '50%' }, // Responsive width
          height: { xs: 'auto', sm: 'auto', md: 'auto' }, // Adjust height as needed
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          image={HeroImage} 
          alt="Photo Frame"
          sx={{
            objectFit: 'cover',         // Ensure the image covers the container
            height: '100%',
            width: '100%',
          }}
        />
      </Card>
    </Box>
  );
};

export default HeroPhoto;
