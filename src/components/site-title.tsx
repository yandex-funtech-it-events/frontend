import { Box, Typography } from '@mui/material';
import CurlyBraces from './curly-braces.tsx';

const SiteTitle = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        bottom: '-10px',
        width: 'fit-content',
        alignSelf: 'center',
        zIndex: '1',
      }}
    >
      <CurlyBraces fill="#F4F1ED" width={32} height={88}>
        <Typography
          variant="h3"
          color="background.gray"
          sx={{
            fontSize: '80px',
          }}
        >
          Meetup
        </Typography>
      </CurlyBraces>
      <Box
        borderRadius={1}
        sx={{
          position: 'absolute',
          top: '0',
          left: '-5px',
          transform: 'rotate(-6deg)',
          background: '#FF6E2C',
          width: '416px',
          height: '100px',
          zIndex: '-1',
        }}
      />
    </Box>
  );
};

export default SiteTitle;
