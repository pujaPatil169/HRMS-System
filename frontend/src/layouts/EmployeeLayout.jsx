// src/layouts/EmployeeLayout.jsx
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import SearchIcon from '@mui/icons-material/Search';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { Stack, Typography, IconButton, TextField, Tooltip, Chip } from '@mui/material';
import PropTypes from 'prop-types';

const NAVIGATION = [
  { kind: 'header', title: 'Employee Menu' },
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'attendance', title: 'My Attendance', icon: <AccessTimeIcon /> },
  { segment: 'salary', title: 'My Salary', icon: <MonetizationOnIcon /> },
  { segment: 'roster', title: 'My Roster', icon: <EventNoteIcon /> },
  { segment: 'leave-request', title: 'Apply for Leave', icon: <TimeToLeaveIcon /> },
];

function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <TextField label="Search" variant="outlined" size="small" sx={{ mx: 1 }} />
      <ThemeSwitcher />
    </Stack>
  );
}

function SidebarFooter({ mini }) {
  return (
    <Typography variant="caption" sx={{ m: 1 }}>
      {mini ? '© HRMS' : `© ${new Date().getFullYear()} HRMS Employee`}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CloudCircleIcon fontSize="large" color="primary" />
      <Typography variant="h6">Employee Panel</Typography>
      <Chip size="small" label="LOGGED IN" color="success" />
      <Tooltip title="Employee Access">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

function EmployeeLayout({ children }) {
  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
      >
        {children}
      </DashboardLayout>
    </AppProvider>
  );
}

export default EmployeeLayout;
