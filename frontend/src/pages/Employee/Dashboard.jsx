// src/pages/Employee/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const EmployeeDashboard = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    // Assuming we have an API to fetch employee data
    fetch('/api/employee/dashboard')
      .then((res) => res.json())
      .then((data) => setEmployeeData(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Employee Dashboard
      </Typography>
      {employeeData ? (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Attendance</Typography>
                <Typography variant="body1">{employeeData.attendanceStatus}</Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  View Attendance
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Leave Balance</Typography>
                <Typography variant="body1">{employeeData.leaveBalance} days</Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Apply for Leave
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Salary</Typography>
                <Typography variant="body1">₹{employeeData.salary}</Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  View Salary
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default EmployeeDashboard;
