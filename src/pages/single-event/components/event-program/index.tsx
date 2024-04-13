import React from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import CustomTabPanel from './components/custom-tab-panel';
import CustomTabCard from './components/custom-tab-card';

import { mockDataProgram } from '../../../../libs/constants';

const EventProgram: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb={20}
      pt={4}
      pb={8}
      sx={{ background: '#F4F1ED' }}
    >
      <Typography component="h2" variant="h3" mb={5} alignSelf="start">
        Программа
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs"
            sx={{ marginBottom: '28px' }}
          >
            <Tab sx={{ width: '222px' }} label="Суббота" {...a11yProps(0)} />
            <Tab sx={{ width: '222px' }} label="Воскресенье" {...a11yProps(1)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          {mockDataProgram.map((card, i) => (
            <CustomTabCard
              key={i}
              time={card.time}
              date={card.date}
              description={card.description}
              eventName={card.eventName}
              data={card.data}
              profession={card.profession}
            />
          ))}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          {mockDataProgram.map((card, i) => (
            <CustomTabCard
              key={i}
              time={card.time}
              date={card.date}
              description={card.description}
              eventName={card.eventName}
              data={card.data}
              profession={card.profession}
            />
          ))}
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default EventProgram;
