'use client';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Using makeStyles hook
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {   
    width: '100%',
    maxWidth: '400px',
    padding: theme.spacing(3), // Use theme.spacing here
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[3],
  },
  button: {
    marginTop: theme.spacing(2), // Use theme.spacing for consistency
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.form}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
          >
            Log In
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
