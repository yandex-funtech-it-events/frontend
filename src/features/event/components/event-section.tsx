import { Box, Button, ImageList, ImageListItem, Link, Stack, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EventList from './event-list.tsx';
import BannerCard from '../../../pages/home/components/banner-card.tsx';
import EventCard from './event-card.tsx';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

type EventSectionProps<T> = {
  title: string;
  events: T[];
  href: string;
  isAllEvents?: boolean;
};

const EventSection = ({
  title,
  href,
  events,
  isAllEvents = false,
}: EventSectionProps<{ img: string; title: string; cols?: number; rows?: number }>) => {
  const [howManyEventsShow, setHowManyEventsShow] = useState(4);

  return (
    <Box component="section" display="flex" flexDirection="column" gap={13}>
      <Link
        href={href}
        color="text.primary"
        underline="none"
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Typography variant="h2">{title}</Typography>
        <ChevronRightIcon fontSize="large" />
      </Link>

      {isAllEvents ? (
        <Stack spacing={10}>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={415}
            sx={{ width: 1, margin: 0, padding: 0 }}
            style={{ gap: '16px' }}
          >
            {events.slice(0, howManyEventsShow).map((item, index) => {
              if (index === 0) {
                return (
                  <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
                    <BannerCard />
                  </ImageListItem>
                );
              } else {
                return (
                  <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
                    <EventCard bgImage={item.img} fullWidth />
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
      ) : (
        <EventList events={events} />
      )}
    </Box>
  );
};

export default EventSection;
