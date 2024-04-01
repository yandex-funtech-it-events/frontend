import { Box, ImageList, ImageListItem } from '@mui/material';
import hero from '@/assets/images/hero.png';
import heroSvg from '@/assets/icons/hero_svg.svg';

const Hero = () => {
  return (
    <Box component="section" pt={14} pb={10} sx={{ position: 'relative' }}>
      <img
        src={heroSvg}
        alt="meetup"
        style={{ position: 'absolute', right: '-25px', top: '15px' }}
      />

      <ImageList sx={{ width: '100%', margin: '0' }} cols={1}>
        <ImageListItem>
          <img src={hero} alt="meetup" loading="lazy" />
        </ImageListItem>
      </ImageList>
    </Box>
  );
};

export default Hero;
