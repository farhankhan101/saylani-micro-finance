'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/path-to-your-image.jpg)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px', // Adjust height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', // Text color for visibility on dark background
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay to darken the background and make text readable */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
        }}
      />
      
      <Container>
        <Typography variant="h3" component="h1" sx={{ zIndex: 1 }}>
          Saylani Micro Finance App
        </Typography>
        <Typography variant="h6" sx={{ zIndex: 1, mt: 2 }}>
          A solution to empower the underserved with easy access to financial services.
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
