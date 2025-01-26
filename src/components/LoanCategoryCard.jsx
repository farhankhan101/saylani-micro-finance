// LoanCategoryCard.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

const LoanCategoryCard = ({ category }) => {
  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h6" color="primary">
        {category.name}
      </Typography>
      <Typography variant="body2">
        <strong>Subcategories:</strong> {category.subcategories.join(', ')}
      </Typography>
      <Typography variant="body2">
        <strong>Max Loan:</strong> PKR {category.maxLoan.toLocaleString()}
      </Typography>
      <Typography variant="body2">
        <strong>Loan Period:</strong> {category.loanPeriod} years
      </Typography>
    </Paper>
  );
};

export default LoanCategoryCard;
