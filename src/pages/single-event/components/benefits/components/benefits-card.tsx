import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

interface BenefitsCardProps {
  number: number;
  description: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ number, description }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      sx={{ border: '1px dashed grey', maxWidth: '386px', width: '100%' }}
    >
      <Typography variant="h1">{number}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default BenefitsCard;
