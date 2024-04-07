import React from 'react';
import { Box } from '@mui/material';
import BenefitsCard from './components/benefits-card';

const Benefits: React.FC = () => {
  const benefitsMockData = [
    {
      number: 30,
      description: 'Описание преимущества',
    },
    {
      number: 30,
      description: 'Описание преимущества',
    },
    {
      number: 30,
      description: 'Описание преимущества',
    },
  ];

  return (
    <Box
      component="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={4}
      pb={4}
      sx={{
        border: '1px dashed grey',
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
