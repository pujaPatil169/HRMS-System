// import React from 'react';
// import { Box, Typography, Paper } from '@mui/material';

// const Reports = () => {
//   return (
//     <Box p={3}>
//       <Typography variant="h5" gutterBottom>Client Reports</Typography>
//       <Paper sx={{ p: 2 }}>
//         <Typography>Generate and view reports for each client here.</Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default Reports;


import React, { useState } from 'react';
import {
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const mockClients = ['ABC Corp', 'XYZ Pvt Ltd', 'Tech Innovators'];

const mockReportData = {
  'ABC Corp': [
    { employee: 'John Doe', attendance: 20, salary: 50000 },
    { employee: 'Jane Smith', attendance: 18, salary: 48000 },
  ],
  'XYZ Pvt Ltd': [
    { employee: 'Alice Green', attendance: 22, salary: 52000 },
    { employee: 'Bob White', attendance: 21, salary: 51000 },
  ],
  'Tech Innovators': [
    { employee: 'Charlie Blue', attendance: 23, salary: 53000 },
  ],
};

const Reports = () => {
  const [selectedClient, setSelectedClient] = useState('');

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Reports Per Client
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Select Client</InputLabel>
        <Select
          value={selectedClient}
          onChange={handleClientChange}
          label="Select Client"
        >
          {mockClients.map((client) => (
            <MenuItem key={client} value={client}>
              {client}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedClient && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Attendance & Salary Report for {selectedClient}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell>Days Attended</TableCell>
                <TableCell>Salary (INR)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockReportData[selectedClient]?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.employee}</TableCell>
                  <TableCell>{row.attendance}</TableCell>
                  <TableCell>{row.salary.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Paper>
  );
};

export default Reports;
