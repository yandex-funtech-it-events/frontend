import React from 'react';
import { Box, Container } from '@mui/material';
import BenefitsCard from './components/benefits-card';
import { benefitsMockData } from '../../../../libs/constants';

const Benefits: React.FC = () => {
  return (
    <Container sx={{ background: '#FF4D00' }}>
      <Box
        component="section"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pt={4}
        pb={4}
        mt={20}
        sx={{
          gap: '109px',
          background: '#FF4D00',
        }}
      >
        {benefitsMockData.map((item, i) => (
          <BenefitsCard key={i} number={item.number} description={item.description} />
        ))}
      </Box>
    </Container>
  );
};

export default Benefits;
