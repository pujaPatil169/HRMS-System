// src/pages/Admin/Roster.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  MenuItem,
  Paper,
} from '@mui/material';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const shifts = ['Morning', 'Afternoon', 'Night'];

const Roster = () => {
  const [roster, setRoster] = useState({ day: '', shift: '', employee: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoster((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Roster Created:', roster);
    // TODO: Save roster to backend
    setRoster({ day: '', shift: '', employee: '' });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Create Work Roster
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 2, maxWidth: 500 }}>
        <Stack spacing={2}>
          <TextField
            label="Employee Name"
            name="employee"
            value={roster.employee}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            select
            label="Day"
            name="day"
            value={roster.day}
            onChange={handleChange}
            fullWidth
            required
          >
            {days.map((d) => (
              <MenuItem key={d} value={d}>
                {d}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Shift"
            name="shift"
            value={roster.shift}
            onChange={handleChange}
            fullWidth
            required
          >
            {shifts.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" onClick={handleSubmit}>
            Assign Shift
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Roster;
