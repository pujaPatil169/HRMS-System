// src/components/FaceRecognitionNoCam.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const FaceRecognitionNoCam = () => {
  return (
    <Box textAlign="center" mt={5}>
      <ErrorOutlineIcon color="error" sx={{ fontSize: 60 }} />
      <Typography variant="h5" mt={2}>
        Camera Not Detected
      </Typography>
      <Typography color="text.secondary" mt={1}>
        Please connect a camera or allow access to continue face recognition.
      </Typography>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={() => window.location.reload()}>
        Retry
      </Button>
    </Box>
  );
};

export default FaceRecognitionNoCam;
