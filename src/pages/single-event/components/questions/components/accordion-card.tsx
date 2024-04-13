import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface AccordionCardProps {
  title: string;
  description: string;
}

//если добавить к accordion defaultExpanded, тогда
//он по дефолту будет открыт
const AccordionCard: React.FC<AccordionCardProps> = ({ title, description }) => {
  return (
    <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel-one" id="title-one">
        {title}
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionCard;
