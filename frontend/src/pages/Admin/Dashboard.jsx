// src/pages/Admin/Dashboard.jsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const stats = [
  { label: 'Total Employees', value: 128 },
  { label: 'Active Projects', value: 12 },
  { label: 'Pending Leave Requests', value: 5 },
  { label: 'Monthly Payroll Processed', value: '₹ 12,50,000' },
];

const AdminDashboard = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Welcome to Admin Dashboard
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">{item.label}</Typography>
              <Typography variant="h4" color="primary">
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
