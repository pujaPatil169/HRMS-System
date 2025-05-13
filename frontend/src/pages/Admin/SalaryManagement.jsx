// src/pages/Admin/SalaryManagement.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
  TextField,
} from '@mui/material';

const initialSalaries = [
  { id: 1, name: 'Rohit Sharma', base: 50000, bonus: 5000 },
  { id: 2, name: 'Priya Mehta', base: 45000, bonus: 4500 },
];

const SalaryManagement = () => {
  const [salaries, setSalaries] = useState(initialSalaries);

  const updateBonus = (id, value) => {
    setSalaries((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, bonus: parseInt(value) || 0 } : emp
      )
    );
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Salary Management
      </Typography>
      <Paper elevation={3} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Base Salary</TableCell>
              <TableCell>Bonus</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaries.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>₹{emp.base}</TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    type="number"
                    value={emp.bonus}
                    onChange={(e) => updateBonus(emp.id, e.target.value)}
                    inputProps={{ min: 0 }}
                    sx={{ width: 100 }}
                  />
                </TableCell>
                <TableCell>₹{emp.base + emp.bonus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default SalaryManagement;
