// src/pages/Admin/AddEmployee.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Paper,
  MenuItem,
} from '@mui/material';

const departments = ['HR', 'Engineering', 'Sales', 'Marketing', 'Finance'];

const AddEmployee = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    joiningDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', form);
    // TODO: Integrate with API
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Add New Employee
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={form.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Role"
              name="role"
              fullWidth
              value={form.role}
              onChange={handleChange}
              required
            />
            <TextField
              select
              label="Department"
              name="department"
              fullWidth
              value={form.department}
              onChange={handleChange}
              required
            >
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Joining Date"
              name="joiningDate"
              type="date"
              fullWidth
              value={form.joiningDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <Button variant="contained" color="primary" type="submit">
              Add Employee
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default AddEmployee;
