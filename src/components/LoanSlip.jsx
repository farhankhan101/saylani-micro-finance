import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const LoanSlip = ({ slip }) => {
  return (
    <Box sx={{ marginTop: 4, padding: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" color="primary">
        Loan Slip
      </Typography>
      <Typography variant="body1">
        <strong>Token Number:</strong> {slip.token}
      </Typography>
      <Typography variant="body1">
        <strong>Appointment:</strong> {slip.appointment}
      </Typography>
      <Typography variant="body1">
        <strong>Guarantors:</strong> {slip.guarantors.map((guarantor, index) => (
          <div key={index}>
            <strong>{guarantor.name}</strong> (Email: {guarantor.email}, CNIC: {guarantor.cnic})
          </div>
        ))}
      </Typography>
      <Typography variant="body1">
        <strong>QR Code:</strong> <img src={slip.qrCode} alt="QR Code" width={150} />
      </Typography>
      <Button variant="contained" color="primary">
        Download Slip
      </Button>
    </Box>
  );
};

export default LoanSlip;
