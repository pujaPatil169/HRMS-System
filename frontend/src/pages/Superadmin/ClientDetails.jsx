import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const ClientDetails = () => {
  // Placeholder data
  const employees = ['Employee 1', 'Employee 2', 'Employee 3'];

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Client Details</Typography>
      <Paper sx={{ p: 2 }}>
        <Typography variant="subtitle1">Employees under this client:</Typography>
        <List>
          {employees.map((emp, index) => (
            <ListItem key={index}>
              <ListItemText primary={emp} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ClientDetails;
