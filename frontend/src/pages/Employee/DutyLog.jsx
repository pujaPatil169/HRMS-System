// src/pages/Employee/DutyLog.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const DutyLog = () => {
  const [dutyLog, setDutyLog] = useState([]);

  useEffect(() => {
    // API call to fetch duty logs
    fetch('/api/employee/duty-log')
      .then((res) => res.json())
      .then((data) => setDutyLog(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Duty Log
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Check-in Time</TableCell>
              <TableCell>Check-out Time</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dutyLog.map((log, idx) => (
              <TableRow key={idx}>
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.checkIn}</TableCell>
                <TableCell>{log.checkOut}</TableCell>
                <TableCell>{log.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default DutyLog;
