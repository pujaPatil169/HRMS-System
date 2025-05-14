// src/layouts/AdminLayout.jsx
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CampaignIcon from '@mui/icons-material/Campaign';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import LayoutWrapper from './LayoutWrapper';
import { Stack, Typography, IconButton, TextField, Tooltip, Chip, Box } from '@mui/material';
import PropTypes from 'prop-types';

const NAVIGATION = [
  { kind: 'header', title: 'Admin Menu' },
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'employees', title: 'Employee List', icon: <GroupIcon /> },
  { segment: 'salary', title: 'Salary', icon: <MonetizationOnIcon /> },
  { segment: 'attendance', title: 'Attendance', icon: <AccessTimeIcon /> },
  { segment: 'add-employee', title: 'Add Employee', icon: <PersonAddIcon /> },
  { segment: 'delete-employee', title: 'Delete Employee', icon: <PersonRemoveIcon /> },
  { segment: 'roster', title: 'Create Roster', icon: <EventNoteIcon /> },
  { segment: 'leaves', title: 'Leave Requests', icon: <DescriptionIcon /> },
  { segment: 'announcements', title: 'Announcements', icon: <CampaignIcon /> },
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
      {mini ? '© HRMS' : `© ${new Date().getFullYear()} HRMS Powered`}
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
      <Typography variant="h6">Admin Panel</Typography>
      <Chip size="small" label="ACTIVE" color="primary" />
      <Tooltip title="Admin Access">
        <CheckCircleIcon color="success" fontSize="small" />
      </Tooltip>
    </Stack>
  );
}

function AdminLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default AdminLayout;
