




// src/pages/Employee/AttendanceHistory.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const AttendanceHistory = () => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  useEffect(() => {
    // API call to fetch attendance history
    fetch('/api/employee/attendance-history')
      .then((res) => res.json())
      .then((data) => setAttendanceHistory(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Attendance History
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceHistory.map((rec, idx) => (
              <TableRow key={idx}>
                <TableCell>{rec.date}</TableCell>
                <TableCell>{rec.status}</TableCell>
                <TableCell>{rec.leaveType}</TableCell>
                <TableCell>{rec.remarks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AttendanceHistory;
