// src/components/LeaveRequestForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography } from '@mui/material';

const LeaveRequestForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ from: '', to: '', reason: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.from || !form.to || !form.reason) return alert('All fields are required');
    onSubmit?.(form);
    setForm({ from: '', to: '', reason: '' });
  };

  return (
    <Box>
      <Typography variant="h6">Leave Request</Typography>
      <Stack spacing={2} mt={2}>
        <TextField name="from" label="From" type="date" InputLabelProps={{ shrink: true }} value={form.from} onChange={handleChange} />
        <TextField name="to" label="To" type="date" InputLabelProps={{ shrink: true }} value={form.to} onChange={handleChange} />
        <TextField name="reason" label="Reason" multiline rows={3} value={form.reason} onChange={handleChange} />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Box>
  );
};

export default LeaveRequestForm;
