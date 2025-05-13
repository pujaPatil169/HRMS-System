import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

const AddClient = () => {
  const [clientName, setClientName] = useState('');

  const handleAddClient = () => {
    // API call goes here
    alert(`Client "${clientName}" added.`);
    setClientName('');
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Add New Client</Typography>
      <Paper sx={{ p: 2 }}>
        <TextField
          label="Client Name"
          fullWidth
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleAddClient}>Add Client</Button>
      </Paper>
    </Box>
  );
};

export default AddClient;
