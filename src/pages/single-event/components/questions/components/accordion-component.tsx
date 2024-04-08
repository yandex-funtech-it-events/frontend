import React from 'react';

import { Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const AccordionComponent: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" width="910px">
      <Accordion sx={{ border: 'none' }}>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel-one" id="title-one">
          Заголовок в одну строчку
        </AccordionSummary>
        <AccordionDetails>
          Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на
          которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю
          решить его проблему и снять нагрузку с центра поддержки
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel-two" id="title-two">
          Заголовок в одну строчку
        </AccordionSummary>
        <AccordionDetails>
          Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на
          которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю
          решить его проблему и снять нагрузку с центра поддержки
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel-three" id="title-three">
          Заголовок в одну строчку
        </AccordionSummary>
        <AccordionDetails>
          Описание – краткая расшифровка часто задаваемого вопроса. Описывайте информацию, на
          которую не нашлось ответа на лендинге или которую стоит уточнить. Помогите пользователю
          решить его проблему и снять нагрузку с центра поддержки
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionComponent;
