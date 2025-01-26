'use client';
import React, { useState } from 'react';
import { Container, Typography, Box, MenuItem, Select, InputLabel, FormControl, TextField, Button, Grid, Paper } from '@mui/material';
import ProceedPopup from '../components/ProceedPopup';  // import ProceedPopup component
import LoanRequestForm from '../components/LoanRequestForm';  // import LoanRequestForm component
import LoanSlip from '../components/LoanSlip'; // import SlipGeneration component

const MainPage = () => {
  const loanCategories = [
    {
      name: 'Wedding Loans',
      subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
      maxLoan: 500000,
      loanPeriod: 3,
    },
    {
      name: 'Home Construction Loans',
      subcategories: ['Structure', 'Finishing', 'Loan'],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      name: 'Business Startup Loans',
      subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      name: 'Education Loans',
      subcategories: ['University Fees', 'Child Fees Loan'],
      maxLoan: 'Based on requirement',
      loanPeriod: 4,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [loanBreakdown, setLoanBreakdown] = useState(null);
  const [showProceedPopup, setShowProceedPopup] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleCalculateLoan = () => {
    const selectedCategoryDetails = loanCategories.find((cat) => cat.name === selectedCategory);
    if (selectedCategoryDetails && deposit && loanPeriod) {
      const maxLoan = selectedCategoryDetails.maxLoan;
      const loanAmount = maxLoan - deposit;
      const monthlyInstallment = loanAmount / (loanPeriod * 12);

      setLoanBreakdown({
        loanAmount,
        monthlyInstallment,
        totalRepayment: loanAmount + (monthlyInstallment * loanPeriod * 12),
      });
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Saylani Micro Finance App
      </Typography>

      {/* Loan Categories Section */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Loan Categories & Details
        </Typography>
        <Grid container spacing={4}>
          {loanCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Loan Calculator Section */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Loan Calculator
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Category Select */}
          <FormControl fullWidth>
            <InputLabel>Loan Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('');
              }}
              label="Loan Category"
            >
              {loanCategories.map((category, index) => (
                <MenuItem key={index} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Subcategory Select */}
          <FormControl fullWidth disabled={!selectedCategory}>
            <InputLabel>Subcategory</InputLabel>
            <Select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              label="Subcategory"
            >
              {selectedCategory &&
                loanCategories
                  .find((cat) => cat.name === selectedCategory)
                  ?.subcategories.map((sub, index) => (
                    <MenuItem key={index} value={sub}>
                      {sub}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>

          {/* Initial Deposit Input */}
          <TextField
            label="Initial Deposit (PKR)"
            type="number"
            fullWidth
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            required
          />

          {/* Loan Period Input */}
          <TextField
            label="Loan Period (Years)"
            type="number"
            fullWidth
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            required
          />

          {/* Calculate Button */}
          <Button variant="contained" color="primary" onClick={handleCalculateLoan} sx={{ padding: '10px 20px' }}>
            Calculate Loan
          </Button>

          {/* Proceed Button (Opens the Proceed Popup) */}
          <Button
            variant="contained"
            color="secondary"
            sx={{ padding: '10px 20px', marginTop: 2 }}
            onClick={() => setShowProceedPopup(true)}
          >
            Proceed with Application
          </Button>
        </Box>

        {/* Loan Breakdown */}
        {loanBreakdown && (
          <Box sx={{ marginTop: 4, padding: 3, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h6" color="primary">
              Loan Breakdown
            </Typography>
            <Typography variant="body1">
              <strong>Loan Amount:</strong> PKR {loanBreakdown.loanAmount.toLocaleString()}
            </Typography>
            <Typography variant="body1">
              <strong>Monthly Installment:</strong> PKR {loanBreakdown.monthlyInstallment.toLocaleString()}
            </Typography>
            <Typography variant="body1">
              <strong>Total Repayment:</strong> PKR {loanBreakdown.totalRepayment.toLocaleString()}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Proceed Popup */}
      {showProceedPopup && (
        <ProceedPopup
          setUserDetails={setUserDetails}
          setShowProceedPopup={setShowProceedPopup}
        />
      )}

      {/* Loan Request Form (only after user has details) */}
      {userDetails && (
        <LoanRequestForm userDetails={userDetails} />
      )}

      {/* Slip Generation (after request form is submitted) */}
      {userDetails && (
        <LoanSlip userDetails={userDetails} />
      )}
    </Container>
  );
};

export default MainPage;
