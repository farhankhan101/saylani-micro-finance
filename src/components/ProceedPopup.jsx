import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, Modal } from '@mui/material';

const ProceedPopup = ({ setUserDetails, setShowProceedPopup }) => {
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        cnic,
        email,
        name,
      });
      setUserDetails(response.data); // Set user details from API response
      setShowProceedPopup(false); // Close popup
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={true} onClose={() => setShowProceedPopup(false)}>
      <Box sx={{ padding: 4, backgroundColor: 'white', margin: '100px auto', maxWidth: '500px', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Enter Your Details
        </Typography>
        {error && (
          <Typography variant="body2" color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <TextField
          label="CNIC"
          fullWidth
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ marginTop: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: 3 }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </Box>
    </Modal>
  );
};

export default ProceedPopup;
