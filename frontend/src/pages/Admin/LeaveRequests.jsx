// src/pages/Admin/LeaveRequest.jsx
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

const mockLeaves = [
  { id: 1, name: 'Rohit Sharma', reason: 'Sick Leave', status: 'Pending' },
  { id: 2, name: 'Priya Mehta', reason: 'Personal Work', status: 'Pending' },
];

const LeaveRequest = () => {
  const [leaves, setLeaves] = useState(mockLeaves);

  const updateStatus = (id, newStatus) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: newStatus } : leave
      )
    );
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Leave Requests
      </Typography>
      <Paper elevation={3} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.map((leave) => (
              <TableRow key={leave.id}>
                <TableCell>{leave.name}</TableCell>
                <TableCell>{leave.reason}</TableCell>
                <TableCell>{leave.status}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => updateStatus(leave.id, 'Approved')}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => updateStatus(leave.id, 'Rejected')}
                    >
                      Reject
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

export default LeaveRequest;
