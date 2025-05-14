// src/components/LeaveRequestForm.jsx
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  FormHelperText
} from '@mui/material';

const LeaveRequestForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ from: '', to: '', reason: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = () => {
    const { from, to, reason } = form;
    if (!from || !to || !reason) {
      setError('All fields are required');
      return;
    }
    onSubmit?.(form);
    setForm({ from: '', to: '', reason: '' });
    setError('');
  };

  return (
    <Box p={3} borderRadius={2} boxShadow={2} bgcolor="#f9f9f9">
      <Typography variant="h6" gutterBottom>Leave Request</Typography>
      <Stack spacing={2}>
        <TextField
          fullWidth
          name="from"
          label="From"
          type="date"
          required
          InputLabelProps={{ shrink: true }}
          value={form.from}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="to"
          label="To"
          type="date"
          required
          InputLabelProps={{ shrink: true }}
          value={form.to}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="reason"
          label="Reason"
          multiline
          rows={3}
          required
          value={form.reason}
          onChange={handleChange}
        />
        {error && <FormHelperText error>{error}</FormHelperText>}
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Box>
  );
};

export default LeaveRequestForm;
