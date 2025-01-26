import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

const LoanRequestForm = ({ userDetails }) => {
  const [guarantors, setGuarantors] = useState([{ name: '', email: '', location: '', cnic: '' }]);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [salarySheet, setSalarySheet] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!address) newErrors.address = 'Address is required.';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
    guarantors.forEach((guarantor, index) => {
      if (!guarantor.name) newErrors[`guarantorName${index}`] = 'Name is required.';
      if (!guarantor.email) newErrors[`guarantorEmail${index}`] = 'Email is required.';
      if (!guarantor.location) newErrors[`guarantorLocation${index}`] = 'Location is required.';
      if (!guarantor.cnic) newErrors[`guarantorCnic${index}`] = 'CNIC is required.';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddGuarantor = () => {
    setGuarantors([...guarantors, { name: '', email: '', location: '', cnic: '' }]);
  };

  const handleFileUpload = (e) => {
    setSalarySheet(e.target.files[0]);
  };

  const handleSubmitRequest = () => {
    if (!validateForm()) return;

    const applicationData = {
      ...userDetails,
      guarantors,
      address,
      phoneNumber,
      salarySheet,
    };
    console.log('Application Submitted:', applicationData);
    alert('Loan request submitted successfully!');
  };

  return (
    <Box sx={{ marginTop: 4, padding: 3, border: '1px solid #ddd', borderRadius: '8px' }}>
      <Typography variant="h6" gutterBottom>
        Loan Request Form
      </Typography>
      {guarantors.map((guarantor, index) => (
        <Box key={index} sx={{ marginBottom: 3 }}>
          <Typography variant="body1">Guarantor {index + 1}</Typography>
          <TextField
            label="Name"
            fullWidth
            value={guarantor.name}
            onChange={(e) => {
              const updatedGuarantors = [...guarantors];
              updatedGuarantors[index].name = e.target.value;
              setGuarantors(updatedGuarantors);
            }}
            error={!!errors[`guarantorName${index}`]}
            helperText={errors[`guarantorName${index}`]}
            required
          />
          <TextField
            label="Email"
            fullWidth
            value={guarantor.email}
            onChange={(e) => {
              const updatedGuarantors = [...guarantors];
              updatedGuarantors[index].email = e.target.value;
              setGuarantors(updatedGuarantors);
            }}
            error={!!errors[`guarantorEmail${index}`]}
            helperText={errors[`guarantorEmail${index}`]}
            required
            sx={{ marginTop: 2 }}
          />
          <TextField
            label="Location"
            fullWidth
            value={guarantor.location}
            onChange={(e) => {
              const updatedGuarantors = [...guarantors];
              updatedGuarantors[index].location = e.target.value;
              setGuarantors(updatedGuarantors);
            }}
            error={!!errors[`guarantorLocation${index}`]}
            helperText={errors[`guarantorLocation${index}`]}
            required
            sx={{ marginTop: 2 }}
          />
          <TextField
            label="CNIC"
            fullWidth
            value={guarantor.cnic}
            onChange={(e) => {
              const updatedGuarantors = [...guarantors];
              updatedGuarantors[index].cnic = e.target.value;
              setGuarantors(updatedGuarantors);
            }}
            error={!!errors[`guarantorCnic${index}`]}
            helperText={errors[`guarantorCnic${index}`]}
            required
            sx={{ marginTop: 2 }}
          />
        </Box>
      ))}
      <Button variant="outlined" onClick={handleAddGuarantor} sx={{ marginBottom: 3 }}>
        Add Guarantor
      </Button>
      <TextField
        label="Address"
        fullWidth
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        error={!!errors.address}
        helperText={errors.address}
        required
      />
      <TextField
        label="Phone Number"
        fullWidth
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber}
        required
        sx={{ marginTop: 2 }}
      />
      <Typography variant="body1" sx={{ marginTop: 3 }}>
        Upload Salary Sheet:
      </Typography>
      <input type="file" onChange={handleFileUpload} style={{ marginTop: 10 }} />
      {salarySheet && <Typography variant="body2">{`File: ${salarySheet.name}`}</Typography>}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmitRequest}
        sx={{ marginTop: 3 }}
      >
        Submit Request
      </Button>
      {Object.keys(errors).length > 0 && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          Please fill in all required fields correctly.
        </Alert>
      )}
    </Box>
  );
};

export default LoanRequestForm;
