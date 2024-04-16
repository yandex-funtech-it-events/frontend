import React from 'react';

import { Box } from '@mui/material';
import { mockAccordionData } from '../../../../../libs/constants';
import AccordionCard from './accordion-card';

const AccordionComponent: React.FC = () => {
  const accordionArrayLength = mockAccordionData.length;
  return (
    <Box display="flex" flexDirection="column" width="910px">
      {mockAccordionData.map((item, i) => (
        <AccordionCard
          key={i}
          title={item.title}
          description={item.description}
          defaultExpanded={i === accordionArrayLength - 1}
        />
      ))}
    </Box>
  );
};

export default AccordionComponent;
