import { Box, Button, Chip, Collapse, IconButton, Link, Stack, Typography } from '@mui/material';
import eventCard from '@/assets/images/event_card.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import { EventType } from '../types';
import dayjs from 'dayjs';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

type EventCardProps = {
  event: EventType;
  fullWidth?: boolean;
  eventSize?: 'sm' | 'md';
  isProfile?: boolean;
  buttonLabel?: string;
};

const EventCard = ({
  event,
  fullWidth = false,
  eventSize = 'sm',
  isProfile = false,
  buttonLabel,
}: EventCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      borderRadius={5}
      width={fullWidth ? '100%' : eventSize === 'sm' ? 331 : 581}
      minHeight={isProfile ? 240 : 415}
      height={1}
      sx={{
        background:
          hover && isProfile
            ? '#FF6E2C'
            : event.slide
              ? `url(${event.slide})`
              : `url(${eventCard})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.06)',
        transition: 'all 2s ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isProfile ? (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap={3}
          p={4}
          borderRadius={4}
          sx={{
            color: 'white',
            height: '100%',
          }}
        >
          <Stack spacing={3} display="flex" flexDirection="column" justifyContent="space-between">
            <Typography variant="subtitle2" className="display-1-string">
              {dayjs(event.start_at).format('DD/MM/YYYY')} {bull} {event.format} {bull} {event.city}
            </Typography>
            <Typography variant="h6" className="display-3-string">
              {event.name}
            </Typography>
          </Stack>

          {buttonLabel && (
            <Collapse in={hover} timeout="auto">
              <Button color="secondary">{buttonLabel}</Button>
            </Collapse>
          )}
        </Box>
      ) : (
        <>
          <Box display="flex" justifyContent="space-between" px={4} py={2} sx={{ flexGrow: '1' }}>
            <Chip size="small" label="Регистрация открыта" sx={{ color: 'white' }} />
            <IconButton sx={{ alignSelf: 'start' }}>
              <FavoriteBorderIcon
                sx={{
                  color: 'white',
                }}
              />
            </IconButton>
          </Box>

          <Link href="/" color="text.secondary" underline="none">
            <Box
              display="flex"
              flexDirection="column"
              gap={3}
              p={4}
              borderRadius={4}
              sx={{
                background: 'white',
                opacity: 90,
              }}
            >
              <Typography variant="subtitle2" className="display-1-string">
                {dayjs(event.start_at).format('DD/MM/YYYY')} {bull} {event.format} {bull}{' '}
                {event.city}
              </Typography>
              <Typography variant="h6" className="display-3-string">
                {event.name}
              </Typography>
              <Collapse in={hover} timeout="auto">
                <Typography variant="body1">{event.description}</Typography>
              </Collapse>
            </Box>
          </Link>
        </>
      )}
    </Box>
  );
};

export default EventCard;
