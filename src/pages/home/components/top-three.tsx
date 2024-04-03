import { Box, Typography } from '@mui/material';
import EventList from '../../../features/event/components/event-list.tsx';
import { posterImages } from '../../../libs/constants.ts';

const TopThree = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      gap={13}
      borderRadius={5}
      pt={20}
      pb={25}
      px={36}
      sx={{
        background: '#F6FAED',
        zIndex: 1,
      }}
    >
      <Box sx={{ position: 'relative', width: 'fit-content', alignSelf: 'center' }}>
        <Typography variant="h2" textAlign="center">
          Топ-3 событий этого лета
        </Typography>
        <Box
          borderRadius={4}
          sx={{
            position: 'absolute',
            top: '10px',
            left: '-50px',
            transform: 'rotate(-9deg)',
            background: '#CAEB00',
            width: '280px',
            height: '68px',
            zIndex: '-1',
          }}
        />
      </Box>

      <EventList events={posterImages.slice(0, 3)} gap={10} />
    </Box>
  );
};

export default TopThree;
