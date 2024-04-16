import { Box, Button, ImageList, ImageListItem, Link, Stack, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EventList from './event-list.tsx';
import BannerCard from '../../../pages/home/components/banner-card.tsx';
import EventCard from './event-card.tsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import EventListSkeleton from './event-list-skeleton.tsx';
import { EventType } from '../types';
import RandomEvent from '../../../components/random-event.tsx';

type EventSectionProps = {
  title?: string;
  events: EventType[];
  href?: string;
  isAllEvents?: boolean;
  isLoading?: boolean;
};

const EventSection = ({
  title,
  href,
  events,
  isAllEvents = false,
  isLoading = false,
}: EventSectionProps) => {
  const [howManyEventsShow, setHowManyEventsShow] = useState(3);

  return (
    <Box component="section" display="flex" flexDirection="column" gap={13}>
      {title && href && (
        <Link
          href={href}
          color="text.primary"
          underline="none"
          display="flex"
          alignItems="center"
          alignSelf="flex-start"
          gap={1}
        >
          <Typography variant="h2">{title}</Typography>
          <ChevronRightIcon fontSize="large" />
        </Link>
      )}

      {title && !href && <Typography variant="h2">{title}</Typography>}

      {isAllEvents ? (
        <Stack spacing={10}>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={415}
            sx={{ width: 1, margin: 0, padding: 0 }}
            style={{ gap: '16px' }}
          >
            {events.slice(0, howManyEventsShow).map((event, index) => {
              if (index === 0) {
                return (
                  <ImageListItem key={event.id} cols={2} rows={2}>
                    <BannerCard event={event} />
                  </ImageListItem>
                );
              } else if (index === 1) {
                return (
                  <ImageListItem key={event.id} cols={2} rows={1}>
                    <RandomEvent />
                  </ImageListItem>
                );
              } else if (index === 2) {
                return (
                  <ImageListItem key={event.id} cols={2} rows={1}>
                    <EventCard event={event} fullWidth />
                  </ImageListItem>
                );
              } else if (index === 5) {
                return (
                  <ImageListItem key={event.id} cols={2} rows={1}>
                    <EventCard event={event} fullWidth />
                  </ImageListItem>
                );
              } else {
                return (
                  <ImageListItem key={event.id} cols={1} rows={1}>
                    <EventCard event={event} fullWidth />
                  </ImageListItem>
                );
              }
            })}
          </ImageList>

          {events.length >= howManyEventsShow && (
            <Button
              variant="contained"
              onClick={() => setHowManyEventsShow((prev) => prev + 5)}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              загрузить еще <ExpandMoreIcon fontSize="medium" />
            </Button>
          )}
        </Stack>
      ) : isLoading ? (
        <EventListSkeleton />
      ) : (
        <EventList events={events} />
      )}
    </Box>
  );
};

export default EventSection;
