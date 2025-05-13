// src/pages/Employee/RoasterView.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const RoasterView = () => {
  const [rosterData, setRosterData] = useState([]);

  useEffect(() => {
    // API call to fetch roster data
    fetch('/api/employee/roster')
      .then((res) => res.json())
      .then((data) => setRosterData(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Work Roster
      </Typography>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Shift Time</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rosterData.map((day, idx) => (
              <TableRow key={idx}>
                <TableCell>{day.day}</TableCell>
                <TableCell>{day.shiftTime}</TableCell>
                <TableCell>{day.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default RoasterView;
