import { Box, Button, Chip, Typography } from '@mui/material';
import event from '@/assets/images/event_card.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BannerCard = ({ isSlider = false }: { isSlider?: boolean }) => {
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
        backgroundImage: `url(${event})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <Box display="flex" flexDirection="column" gap={5}>
        <Box display="flex" gap={2}>
          <Chip size="small" label="Chip Filled" sx={{ color: 'white' }} />
          <Chip size="small" label="Chip Filled" sx={{ color: 'white' }} />
        </Box>

        <Box display="flex" flexDirection="column" gap={3} sx={{ width: '50%' }}>
          <Typography variant="h2" color="white">
            Конференция виртуальная реальность
          </Typography>
          <Typography
            variant="h6"
            color="white"
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
