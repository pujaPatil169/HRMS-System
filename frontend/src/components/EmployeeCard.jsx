// src/components/EmployeeCard.js
import React from 'react';
import { Card, CardContent, Typography, Avatar, Stack } from '@mui/material';

const EmployeeCard = ({ name, role, email, avatarUrl }) => {
  return (
    <Card sx={{ width: 300, m: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src={avatarUrl} alt={name} sx={{ width: 56, height: 56 }} />
          <div>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="text.secondary">{role}</Typography>
            <Typography variant="body2">{email}</Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
