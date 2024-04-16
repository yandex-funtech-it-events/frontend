import React from 'react';
import { Stack, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Box
      display="flex"
      mt={30}
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%"
      zIndex="99999"
      sx={{ background: 'white' }}
    >
      <Stack sx={{ color: 'grey.200' }} spacing={50} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    </Box>
  );
}
