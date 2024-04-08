import React from 'react';
import { Box, Typography } from '@mui/material';
import AccordionComponent from './components/accordion-component';

const Questions: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="center" mb={16}>
      <Typography component="h2" variant="h2" mb={8} alignSelf="start">
        Вопросы
      </Typography>
      <AccordionComponent />
    </Box>
  );
};

export default Questions;
