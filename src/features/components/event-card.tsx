import { Box, Chip, IconButton, Typography } from '@mui/material';
import event from '@/assets/images/event_card.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

type EventCardProps = {
  bgImage: string;
  fullWidth?: boolean;
};

const EventCard = ({ bgImage, fullWidth = false }: EventCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      borderRadius={5}
      maxWidth={fullWidth ? '100%' : 331}
      width={1}
      minHeight={415}
      height={1}
      p={1}
      sx={{
        backgroundImage: `url(${bgImage ? bgImage : event})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <Box display="flex" justifyContent="space-between" sx={{ flexGrow: '1' }}>
        <Chip label="Регистрация открыта" color="secondary" />
        <IconButton sx={{ alignSelf: 'start' }}>
          <FavoriteBorderIcon />
        </IconButton>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        px={4}
        py={3}
        borderRadius={4}
        sx={{
          background: 'white',
          opacity: 90,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Typography variant="h5" className="display-3-string">
          Форум FutureTech: Погружение в инновации завтрашнего дня
        </Typography>

        {hover && (
          <Typography variant="body1">
            Событие, где соберутся передовые специалисты и лидеры индустрии, чтобы обсудить главные
            тренды и технологические инновации, которые определят будущее.
          </Typography>
        )}

        <Typography variant="body1" className="display-1-string">
          10.08.2024/оффлайн ◐ онлайн/г. Новгород
        </Typography>
      </Box>
    </Box>
  );
};

export default EventCard;
