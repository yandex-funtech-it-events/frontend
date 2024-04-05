import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { posterImages } from '../../../libs/constants.ts';
import EventCard from '../../../features/event/components/event-card.tsx';
import BannerCard from './banner-card.tsx';

const Poster = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" gap={13}>
      <Typography variant="h2">Все события</Typography>

      <ImageList
        variant="quilted"
        cols={4}
        rowHeight={415}
        sx={{ width: 1, margin: 0, padding: 0 }}
        style={{ gap: '16px' }}
      >
        {posterImages.map((item, index) => {
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
    </Box>
  );
};

export default Poster;
