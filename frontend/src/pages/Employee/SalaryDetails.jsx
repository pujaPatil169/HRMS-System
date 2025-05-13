

// src/pages/Employee/DetailedSalary.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const DetailedSalary = () => {
  const [salaryDetails, setSalaryDetails] = useState([]);

  useEffect(() => {
    // API call to fetch detailed salary data
    fetch('/api/employee/detailed-salary')
      .then((res) => res.json())
      .then((data) => setSalaryDetails(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Detailed Salary Breakdown
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Salary Component</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaryDetails.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.component}</TableCell>
                <TableCell>₹{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default DetailedSalary;
