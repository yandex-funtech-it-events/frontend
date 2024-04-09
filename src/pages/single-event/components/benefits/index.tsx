import React from 'react';
import { Box } from '@mui/material';
import BenefitsCard from './components/benefits-card';
import { benefitsMockData } from '../../../../libs/constants';

const Benefits: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={4}
      pb={4}
      sx={{
        marginTop: '109px',
        gap: '109px',
        backgroundColor: '#F5F4F5',
      }}
    >
      {benefitsMockData.map((item, i) => (
        <BenefitsCard key={i} number={item.number} description={item.description} />
      ))}
    </Box>
  );
};

export default Benefits;
