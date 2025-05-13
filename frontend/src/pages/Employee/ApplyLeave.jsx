// src/pages/Employee/ApplyLeave.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';

const ApplyLeave = () => {
  const [leaveData, setLeaveData] = useState({ from: '', to: '', reason: '' });

  const handleChange = (e) => {
    setLeaveData({ ...leaveData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch('/api/employee/leave', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leaveData),
    })
      .then((res) => res.json())
      .then((data) => alert('Leave applied successfully!'))
      .catch((error) => alert('Error applying leave'));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Apply for Leave
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: 400 }}>
        <TextField
          type="date"
          label="From"
          name="from"
          value={leaveData.from}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
          label="To"
          name="to"
          value={leaveData.to}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Reason"
          name="reason"
          value={leaveData.reason}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit Leave Request
        </Button>
      </Stack>
    </Box>
  );
};

export default ApplyLeave;
