import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import AccordionComponent from './components/accordion-component';

const Questions: React.FC = () => {
  return (
    <Container>
      <Box
        id="questions"
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={20}
      >
        <Typography component="h2" variant="h3" mb={10} alignSelf="start">
          Вопросы
        </Typography>
        <AccordionComponent />
      </Box>
    </Container>
  );
};

export default Questions;
