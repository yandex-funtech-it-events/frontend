import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import EventCard from './event-card.tsx';
import SearchIcon from '@mui/icons-material/Search';
import { useEventSearch } from '../hooks/use-event-search.ts';
import { EventType } from '../types';

type EventProfileSectionProps = {
  title: string;
  buttonLabel: string;
  events: EventType[];
};

const EventProfileSection = ({ title, buttonLabel, events }: EventProfileSectionProps) => {
  const { filteredEvents, search, handleSearch } = useEventSearch(events);

  return (
    <Box component="section" display="flex" flexDirection="column" gap={10}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">{title}</Typography>

        <Box display="flex" alignItems="center">
          <TextField
            value={search}
            onChange={handleSearch}
            hiddenLabel
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            placeholder="Поиск по названию события"
            sx={{
              minWidth: '331px',
            }}
          />
        </Box>
      </Box>

      {filteredEvents.length === 0 ? (
        <Typography variant="body1">Таких событий не найдено</Typography>
      ) : (
        <Box
          component="ul"
          display="flex"
          flexWrap="wrap"
          gap={4}
          m={0}
          p={0}
          sx={{ listStyle: 'none' }}
        >
          {filteredEvents.map((event) => (
            <li key={event.id}>
              <EventCard event={event} isProfile buttonLabel={buttonLabel} />
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default EventProfileSection;
