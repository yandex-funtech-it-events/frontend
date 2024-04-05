import { Box, Typography } from '@mui/material';
import CurlyBraces from '../../../components/curly-braces.tsx';
import TextRunner from '../../../components/text-runner.tsx';

const Hero = () => {
  return (
    <Box component="section" pt={14} pb={20} display="flex" alignItems="center" gap={10}>
      <Box sx={{ position: 'relative', width: 'fit-content', alignSelf: 'center', zIndex: '1' }}>
        <CurlyBraces fill="#F4F1ED" width={32} height={88}>
          <Typography
            variant="h2"
            sx={{
              color: '#F4F1ED',
            }}
          >
            Meetup
          </Typography>
        </CurlyBraces>
        <Box
          borderRadius={1}
          sx={{
            position: 'absolute',
            top: '-20px',
            left: '-5px',
            transform: 'rotate(-6deg)',
            background: '#FF6E2C',
            width: '416px',
            height: '100px',
            zIndex: '-1',
          }}
        />
      </Box>
      <TextRunner text="события IT на одной площадке • митапы и другой текст" />
    </Box>
  );
};

export default Hero;
