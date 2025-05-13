// src/pages/Admin/Announcements.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Announcements = () => {
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([
    'System maintenance on May 15th at 6 PM.',
    'Team outing scheduled for May 20th.',
  ]);

  const handleAdd = () => {
    if (announcement.trim()) {
      setAnnouncements([announcement, ...announcements]);
      setAnnouncement('');
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Announcements
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <Stack spacing={2}>
          <TextField
            label="New Announcement"
            fullWidth
            multiline
            rows={3}
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
          />
          <Button variant="contained" onClick={handleAdd}>
            Post Announcement
          </Button>
        </Stack>
        <List sx={{ mt: 4 }}>
          {announcements.map((text, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Announcements;
