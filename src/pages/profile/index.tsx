import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EventSection from '../../features/event/components/event-section.tsx';
import { useEvents } from '../../features/event/hooks/use-events.ts';
import RandomEvent from '../../components/random-event.tsx';

const ProfilePage = () => {
  const { events, favorites } = useEvents();
  const [value, setValue] = React.useState('1');
  const favoritesEventsIds = favorites.map((fav) => fav.event);
  const favoritesEvents = events?.filter((event) => favoritesEventsIds.includes(event.id)) || [];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={10}>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Предстоящие" value="1" />
          <Tab label="Избранные" value="2" />
          <Tab label="Прошедшие" value="3" />
        </TabList>
        <TabPanel value="1">
          <EventSection events={events || []} />
        </TabPanel>
        <TabPanel value="2">
          <Stack spacing={13}>
            {favoritesEvents.length > 0 ? (
              <EventSection events={favoritesEvents || []} />
            ) : (
              <Box
                pt={10}
                sx={{
                  display: 'grid',
                }}
              >
                <RandomEvent />
              </Box>
            )}
          </Stack>
        </TabPanel>
        <TabPanel value="3">
          <EventSection events={events || []} />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};

export default ProfilePage;
