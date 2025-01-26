'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        marginTop: 'auto', // Makes sure the footer stays at the bottom
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2025 Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
