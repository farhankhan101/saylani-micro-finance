'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  logoText: {
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between', // Align items with space between
    width: '100%',
  },
  button: {
    color: theme.palette.common.white,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box className={classes.navbar }>
          <Typography variant="h6" className={classes.logoText}>
            MyLogo
          </Typography>
          <Button className={classes.button} href="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
