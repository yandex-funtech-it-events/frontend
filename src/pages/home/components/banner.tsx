import { Box, Chip, ImageList, ImageListItem, Typography } from '@mui/material';
import banner from '@/assets/images/Banner.png';
import Carousel from 'react-material-ui-carousel';

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
          <Box
            display="flex"
            flexDirection="column"
            p={8}
            pb={18}
            maxWidth={680}
            width={1}
            borderRadius={4}
            sx={{
              background:
                'linear-gradient(90deg, rgba(215, 241, 144, 0.85) 0%, rgba(163, 192, 82, 0.85) 100%)',
            }}
          >
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={1}>
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
              </Box>
              <Typography variant="h1">12/08/2024</Typography>
            </Box>

            <Typography pt={21} variant="h2">
              Конференция Яндекса по инфраструктуре
            </Typography>
          </Box>

          <Box borderRadius={4} maxWidth={680} width={1}>
            <ImageList sx={{ width: '100%', margin: '0' }} cols={1}>
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
