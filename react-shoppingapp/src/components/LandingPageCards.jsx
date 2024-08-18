import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Features = () => {
  const features = [
    { icon: <ShoppingCartIcon fontSize="large" />, text: 'Organized Shopping' },
    { icon: <GroupIcon fontSize="large" />, text: 'Collaborative Shopping' },
    { icon: <PhoneIphoneIcon fontSize="large" />, text: 'Mobile Accessibility' },
  ];

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                {feature.icon}
                <Typography variant="h6" align="center" marginTop={2}>
                  {feature.text}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
