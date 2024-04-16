import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface AccordionCardProps {
  title: string;
  description: string;
  defaultExpanded?: boolean;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ title, description, defaultExpanded }) => {
  return (
    <Accordion sx={{ border: 'none', boxShadow: 'none' }} defaultExpanded={defaultExpanded}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel-one" id="title-one">
        <Typography component="p" variant="h6">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="p" variant="body1">
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionCard;
