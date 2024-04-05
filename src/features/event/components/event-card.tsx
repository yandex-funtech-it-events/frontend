import { Box, Chip, Collapse, IconButton, Link, Typography } from '@mui/material';
import event from '@/assets/images/event_card.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

type EventCardProps = {
  bgImage: string;
  fullWidth?: boolean;
  eventSize?: 'sm' | 'md';
};

const EventCard = ({ bgImage, fullWidth = false, eventSize = 'sm' }: EventCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      borderRadius={5}
      maxWidth={fullWidth ? '100%' : eventSize === 'sm' ? 331 : 581}
      width={1}
      minHeight={415}
      height={1}
      sx={{
        backgroundImage: `url(${bgImage ? bgImage : event})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.06)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box display="flex" justifyContent="space-between" px={4} py={2} sx={{ flexGrow: '1' }}>
        <Chip label="Регистрация открыта" />
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
          <Typography variant="body1" className="display-1-string">
            10.08.2024 {bull} оффлайн/онлайн {bull} г. Новгород
          </Typography>
          <Typography variant="h5" className="display-3-string">
            Форум FutureTech: Погружение в инновации завтрашнего дня
          </Typography>
          <Collapse in={hover} timeout="auto">
            <Typography variant="body1">
              Событие, где соберутся передовые специалисты и лидеры индустрии, чтобы обсудить
              главные тренды и технологические инновации, которые определят будущее.
            </Typography>
          </Collapse>
        </Box>
      </Link>
    </Box>
  );
};

export default EventCard;
