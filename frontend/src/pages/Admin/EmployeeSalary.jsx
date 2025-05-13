import React from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';

const mockSalaries = [
  {
    id: 1,
    name: 'Rohit Sharma',
    designation: 'Software Engineer',
    baseSalary: 50000,
    daysPresent: 22,
    totalPay: 50000 / 30 * 22,
  },
  {
    id: 2,
    name: 'Priya Mehta',
    designation: 'Data Analyst',
    baseSalary: 40000,
    daysPresent: 20,
    totalPay: 40000 / 30 * 20,
  },
];

const EmployeeSalary = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Employee Salary Details
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Base Salary (₹)</TableCell>
              <TableCell>Days Present</TableCell>
              <TableCell>Total Pay (₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockSalaries.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.designation}</TableCell>
                <TableCell>{emp.baseSalary.toFixed(2)}</TableCell>
                <TableCell>{emp.daysPresent}</TableCell>
                <TableCell>{emp.totalPay.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeSalary;
