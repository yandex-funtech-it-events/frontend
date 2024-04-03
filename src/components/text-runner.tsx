import { Box, Typography } from '@mui/material';

const TextRunner = ({ text, duration = 25 }: { text: string; duration?: number }) => {
  return (
    <Box width={1} sx={{ overflow: 'hidden' }}>
      <Typography
        variant="body1"
        sx={{ whiteSpace: 'nowrap', animation: `textRunner ${duration}s linear infinite` }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TextRunner;
