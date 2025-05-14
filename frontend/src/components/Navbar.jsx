// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = ({ user, onLogout }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          HRMS System
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" mr={2}>{user?.name}</Typography>
          <Button color="inherit" onClick={onLogout}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
