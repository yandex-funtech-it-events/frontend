import { Box, Button, Chip, Typography } from '@mui/material';
import eventCard from '@/assets/images/event_card.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { EventType } from '../../../features/event/types';

type BannerCardProps = {
  event: EventType;
  isSlider?: boolean;
};

const BannerCard = ({ event, isSlider = false }: BannerCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      minHeight={480}
      height={1}
      p={10}
      borderRadius={4}
      sx={{
        width: isSlider ? '90%' : '100%',
        backgroundImage: event.picture ? `url(${event.picture})` : `url(${eventCard})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <Box display="flex" flexDirection="column" gap={5}>
        {event.tags.length > 0 && (
          <Box display="flex" gap={2}>
            {event.tags.map((tag) => (
              <Chip key={tag.id} size="small" label={tag.name} sx={{ color: 'white' }} />
            ))}
          </Box>
        )}

        <Box display="flex" flexDirection="column" gap={3} sx={{ width: '50%' }}>
          <Typography variant="h2" color="white">
            {event.title}
          </Typography>
          <Typography
            variant="h6"
            color="white"
            sx={{
              paddingBottom: isSlider ? '48px' : '',
            }}
          >
            {event.description}
          </Typography>
        </Box>
      </Box>

      {!isSlider && (
        <Button
          size="large"
          variant="contained"
          href={`event/${event.id}`}
          sx={{
            width: 'fit-content',
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '8px',
            marginTop: '36px',
          }}
        >
          Участвовать <ArrowForwardIosIcon />
        </Button>
      )}
    </Box>
  );
};

export default BannerCard;
