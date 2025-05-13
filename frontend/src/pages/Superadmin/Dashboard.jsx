import React from 'react';
import { Typography, Box } from '@mui/material';

const SuperadminDashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Superadmin Dashboard</Typography>
      <Typography>Welcome to the HRMS Superadmin Panel. Here you can manage clients and access reports.</Typography>
    </Box>
  );
};

export default SuperadminDashboard;
