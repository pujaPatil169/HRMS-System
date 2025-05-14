// src/pages/Employee/Attendance.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    // API call to fetch attendance records
    fetch('/api/employee/attendance')
      .then((res) => res.json())
      .then((data) => setAttendanceRecords(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Your Attendance
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Login Time</TableCell>
              <TableCell>Logout Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceRecords.map((rec, idx) => (
              <TableRow key={idx}>
                <TableCell>{rec.date}</TableCell>
                <TableCell>{rec.login}</TableCell>
                <TableCell>{rec.logout}</TableCell>
                <TableCell>{rec.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Attendance;