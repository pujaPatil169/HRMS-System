import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const mockClients = [
  { id: 1, name: 'ABC Corp' },
  { id: 2, name: 'XYZ Pvt Ltd' },
  { id: 3, name: 'Tech Innovators' },
];

const DeleteClient = () => {
  const [clients, setClients] = useState(mockClients);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    const updatedClients = clients.filter((client) => client.id !== id);
    setClients(updatedClients);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Delete Client
      </Typography>

      <TextField
        label="Search Clients"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <List>
        {filteredClients.length === 0 ? (
          <Typography>No matching clients found.</Typography>
        ) : (
          filteredClients.map((client) => (
            <React.Fragment key={client.id}>
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(client.id)}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                }
              >
                <ListItemText primary={client.name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        )}
      </List>
    </Paper>
  );
};

export default DeleteClient;
