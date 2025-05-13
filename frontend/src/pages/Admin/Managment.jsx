// src/pages/Admin/Management.jsx
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
} from '@mui/material';

const initialEmployees = [
  { id: 1, name: 'Rohit Sharma', type: 'Full-Time', status: 'Active' },
  { id: 2, name: 'Priya Mehta', type: 'Contract', status: 'On Hold' },
];

const Management = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const toggleStatus = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? { ...emp, status: emp.status === 'Active' ? 'On Hold' : 'Active' }
          : emp
      )
    );
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Employee & Contractor Management
      </Typography>
      <Paper elevation={3} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.type}</TableCell>
                <TableCell>{emp.status}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => toggleStatus(emp.id)}
                    >
                      Toggle Status
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Management;
