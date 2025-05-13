// src/pages/Employee/LeaveBalance.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const LeaveBalance = () => {
  const [leaveData, setLeaveData] = useState({ total: 0, used: 0, remaining: 0 });

  useEffect(() => {
    // API call to fetch leave balance
    fetch('/api/employee/leave-balance')
      .then((res) => res.json())
      .then((data) => setLeaveData(data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Leave Balance
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Leaves</Typography>
              <Typography variant="body1">{leaveData.total} days</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Used Leaves</Typography>
              <Typography variant="body1">{leaveData.used} days</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Remaining Leaves</Typography>
              <Typography variant="body1">{leaveData.remaining} days</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeaveBalance;
