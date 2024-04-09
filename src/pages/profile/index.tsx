import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { posterImages } from '../../libs/constants.ts';
import EventSection from '../../features/event/components/event-section.tsx';

const ProfilePage = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={10}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="предстоящие" value="1" />
          <Tab label="Избранные" value="2" />
          <Tab label="Прошедшие" value="3" />
        </TabList>
        <TabPanel value="1">
          <EventSection events={posterImages} />
        </TabPanel>
        <TabPanel value="2">
          <Stack spacing={13}>
            <EventSection events={posterImages} />

            <Stack spacing={10}>
              <Typography variant="h3">Завершены</Typography>
              <EventSection events={posterImages} />
            </Stack>
          </Stack>
        </TabPanel>
        <TabPanel value="3">
          <EventSection events={posterImages} />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default ProfilePage;
