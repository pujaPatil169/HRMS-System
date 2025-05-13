// // src/pages/Employee/Salary.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const EmployeeSalary = () => {
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    // API call to fetch salary data
    fetch('/api/employee/salary')
      .then((res) => res.json())
      .then((data) => setSalaryData(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Your Salary Details
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Base Salary</TableCell>
              <TableCell>Bonus</TableCell>
              <TableCell>Total Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaryData.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.month}</TableCell>
                <TableCell>₹{row.base}</TableCell>
                <TableCell>₹{row.bonus}</TableCell>
                <TableCell>₹{row.base + row.bonus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default EmployeeSalary;
