import { Box, ImageList, ImageListItem } from '@mui/material';
import banner from '@/assets/images/Banner.png';
import Carousel from 'react-material-ui-carousel';
import BannerAds from './banner-ads.tsx';

const Banner = () => {
  return (
    <Carousel indicators={false}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Box
          key={index}
          component="section"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
          borderRadius={4}
        >
          <BannerAds />

          <Box borderRadius={4} maxWidth={680} width={1}>
            <ImageList sx={{ width: '100%', margin: '0', padding: 0 }} cols={1}>
              <ImageListItem>
                <img src={banner} alt="banner" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default Banner;
