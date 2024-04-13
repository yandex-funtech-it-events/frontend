import React from 'react';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

interface BenefitsCardProps {
  number: string;
  description: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ number, description }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={6}
      maxWidth="386px"
      width="100%"
    >
      <Typography variant="caption">{number}</Typography>
      <Typography variant="h6">{description}</Typography>
    </Box>
  );
};

export default BenefitsCard;
