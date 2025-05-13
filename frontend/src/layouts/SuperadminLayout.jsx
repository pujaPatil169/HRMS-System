// // src/layouts/SuperadminLayout.jsx
// import React from 'react';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import GroupsIcon from '@mui/icons-material/Groups';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DescriptionIcon from '@mui/icons-material/Description';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
// import { Stack, Typography, IconButton, TextField, Tooltip, Chip, Box } from '@mui/material';
// import CloudCircleIcon from '@mui/icons-material/CloudCircle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import SearchIcon from '@mui/icons-material/Search';
// import PropTypes from 'prop-types';

// // const NAVIGATION = [
// //   { kind: 'header', title: 'Superadmin Menu' },
// //   { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
// //   { segment: 'clients', title: 'All Clients', icon: <GroupsIcon /> },
// //   { segment: 'add-client', title: 'Add Client', icon: <AddBusinessIcon /> },
// //   { segment: 'delete-client', title: 'Delete Client', icon: <DeleteIcon /> },
// //   { segment: 'reports', title: 'Reports', icon: <DescriptionIcon /> },
// // ];
// const NAVIGATION = [
//   { kind: 'header', title: 'Superadmin Menu' },
//   { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
//   { segment: 'clients', title: 'Client List', icon: <GroupsIcon /> }, // this links to /superadmin/clients
//   { segment: 'add-client', title: 'Add Client', icon: <AddBusinessIcon /> },
//   { segment: 'delete-client', title: 'Delete Client', icon: <DeleteIcon /> },
//   { segment: 'reports', title: 'Reports', icon: <DescriptionIcon /> },
// ];

// function ToolbarActionsSearch() {
//   return (
//     <Stack direction="row">
//       <Tooltip title="Search">
//         <IconButton>
//           <SearchIcon />
//         </IconButton>
//       </Tooltip>
//       <TextField label="Search" variant="outlined" size="small" sx={{ mx: 1 }} />
//       <ThemeSwitcher />
//     </Stack>
//   );
// }

// function SidebarFooter({ mini }) {
//   return (
//     <Typography variant="caption" sx={{ m: 1 }}>
//       {mini ? '© HRMS' : `© ${new Date().getFullYear()} HRMS Powered`}
//     </Typography>
//   );
// }

// SidebarFooter.propTypes = {
//   mini: PropTypes.bool.isRequired,
// };

// function CustomAppTitle() {
//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <CloudCircleIcon fontSize="large" color="primary" />
//       <Typography variant="h6">Superadmin Panel</Typography>
//       <Chip size="small" label="LIVE" color="success" />
//       <Tooltip title="Secure Access">
//         <CheckCircleIcon color="success" fontSize="small" />
//       </Tooltip>
//     </Stack>
//   );
// }

// function SuperadminLayout({ children }) {
//   return (
//     <AppProvider navigation={NAVIGATION}>
//       <DashboardLayout
//         slots={{
//           appTitle: CustomAppTitle,
//           toolbarActions: ToolbarActionsSearch,
//           sidebarFooter: SidebarFooter,
//         }}
//       >
//         {children}
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

// // export default SuperadminLayout;
// import React from 'react';
// import { Outlet } from 'react-router-dom'; // ✅ Import for nested routes
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import GroupsIcon from '@mui/icons-material/Groups';
// import AddBusinessIcon from '@mui/icons-material/AddBusiness';
// import DeleteIcon from '@mui/icons-material/Delete';
// import DescriptionIcon from '@mui/icons-material/Description';
// // import { AppProvider } from '@toolpad/core/AppProvider';
// import { AppProvider } from '@mui/toolpad-core';

// import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
// import {
//   Stack,
//   Typography,
//   IconButton,
//   TextField,
//   Tooltip,
//   Chip,
//   Box,
// } from '@mui/material';
// import CloudCircleIcon from '@mui/icons-material/CloudCircle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import SearchIcon from '@mui/icons-material/Search';
// import PropTypes from 'prop-types';

// const NAVIGATION = [
//   { kind: 'header', title: 'Superadmin Menu' },
//   { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
//   { segment: 'clients', title: 'Client List', icon: <GroupsIcon /> },
//   { segment: 'add-client', title: 'Add Client', icon: <AddBusinessIcon /> },
//   { segment: 'delete-client', title: 'Delete Client', icon: <DeleteIcon /> },
//   { segment: 'reports', title: 'Reports', icon: <DescriptionIcon /> },
// ];

// function ToolbarActionsSearch() {
//   return (
//     <Stack direction="row">
//       <Tooltip title="Search">
//         <IconButton>
//           <SearchIcon />
//         </IconButton>
//       </Tooltip>
//       <TextField label="Search" variant="outlined" size="small" sx={{ mx: 1 }} />
//       <ThemeSwitcher />
//     </Stack>
//   );
// }

// function SidebarFooter({ mini }) {
//   return (
//     <Typography variant="caption" sx={{ m: 1 }}>
//       {mini ? '© HRMS' : `© ${new Date().getFullYear()} HRMS Powered`}
//     </Typography>
//   );
// }

// SidebarFooter.propTypes = {
//   mini: PropTypes.bool.isRequired,
// };

// function CustomAppTitle() {
//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <CloudCircleIcon fontSize="large" color="primary" />
//       <Typography variant="h6">Superadmin Panel</Typography>
//       <Chip size="small" label="LIVE" color="success" />
//       <Tooltip title="Secure Access">
//         <CheckCircleIcon color="success" fontSize="small" />
//       </Tooltip>
//     </Stack>
//   );
// }

// function SuperadminLayout() {
//   return (
//     <AppProvider navigation={NAVIGATION}>
//       <DashboardLayout
//         slots={{
//           appTitle: CustomAppTitle,
//           toolbarActions: ToolbarActionsSearch,
//           sidebarFooter: SidebarFooter,
//         }}
//       >
//         {/* ✅ This is where all nested pages (like ClientList) will render */}
//         <Box p={3}>
//           <Outlet />
//         </Box>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }

// export default SuperadminLayout;
// src/layouts/SuperadminLayout.jsx
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  TextField,
  Tooltip,
  Chip,
  Stack,
  CssBaseline,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const drawerWidth = 240;

const NAVIGATION = [
  { to: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { to: 'clients', title: 'Client List', icon: <GroupsIcon /> },
  { to: 'add-client', title: 'Add Client', icon: <AddBusinessIcon /> },
  { to: 'delete-client', title: 'Delete Client', icon: <DeleteIcon /> },
  { to: 'reports', title: 'Reports', icon: <DescriptionIcon /> },
];

function SuperadminLayout() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <CloudCircleIcon fontSize="large" />
            <Typography variant="h6" noWrap>
              Superadmin Panel
            </Typography>
            <Chip size="small" label="LIVE" color="success" />
            <Tooltip title="Secure Access">
              <CheckCircleIcon color="success" fontSize="small" />
            </Tooltip>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Tooltip title="Search">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              sx={{ ml: 1 }}
            />
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Typography variant="caption" sx={{ p: 2, fontWeight: 'bold' }}>
              Superadmin Menu
            </Typography>
            {NAVIGATION.map((item) => (
              <ListItem
                button
                key={item.to}
                component={Link}
                to={`/superadmin/${item.to}`}
                selected={location.pathname.includes(item.to)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ p: 2, mt: 'auto' }}>
            <Typography variant="caption">
              © {new Date().getFullYear()} HRMS Powered
            </Typography>
          </Box>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* to offset AppBar height */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default SuperadminLayout;
