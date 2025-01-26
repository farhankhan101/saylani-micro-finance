'use client';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from '../components/Header'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed
import Banner from '../components/Banner'; // Adjust the path if needed

const theme = createTheme({
  spacing: 8, 
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Ensures consistent baseline styling */}
            <Header />
            <Banner /> {/* Add the Banner Component here */}

            {children} {/* This renders the page content */}
            <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
