import React from 'react';
import { Box } from '@mui/material';
import InfoTop from './components/info-top';
import InfoAbout from './components/info-about';
import InfoCard from './components/info-card';

const Info: React.FC = () => {
  return (
    <Box component="section" display="flex" gap={3} sx={{ marginTop: '100px' }}>
      <Box sx={{ width: '50%' }} display="flex" flexDirection="column">
        <InfoTop />
        <InfoAbout />
      </Box>

      <InfoCard />
    </Box>
  );
};

export default Info;