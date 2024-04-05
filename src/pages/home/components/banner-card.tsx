import { Box, Button, Chip, Typography } from '@mui/material';
import event from '@/assets/images/event_card.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BannerCard = ({ isSlider = false }: { isSlider?: boolean }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      height={1}
      p={10}
      borderRadius={4}
      sx={{
        width: isSlider ? '90%' : '100%',
        backgroundImage: `url(${event})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <Box display="flex" flexDirection="column" gap={5}>
        <Box display="flex" gap={2}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Filled" />
        </Box>

        <Box display="flex" flexDirection="column" gap={3} sx={{ width: '50%' }}>
          <Typography variant="h1">Конференция виртуальная реальность</Typography>
          <Typography
            variant="subtitle1"
            sx={{
              paddingBottom: isSlider ? '48px' : '',
            }}
          >
            25 экспертов расскажут вам что-то крутое
          </Typography>
        </Box>
      </Box>

      {!isSlider && (
        <Button
          size="large"
          variant="contained"
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
