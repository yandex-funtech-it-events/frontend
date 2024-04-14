import { Box, Typography } from '@mui/material';

const TextRunner = ({ text, duration = 25 }: { text: string; duration?: number }) => {
  return (
    <Box
      display="flex"
      width={1}
      sx={{
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        color="text.secondary"
        sx={{
          whiteSpace: 'nowrap',
          animation: `textRunner ${duration}s linear infinite`,
          width: 'fit-content',
        }}
      >
        {text}
      </Typography>

      <Typography
        variant="h2"
        color="text.secondary"
        sx={{
          visibility: 'hidden',
          opacity: 0,
        }}
      >
        L
      </Typography>

      <Typography
        variant="h2"
        color="text.secondary"
        sx={{
          whiteSpace: 'nowrap',
          animation: `textRunner ${duration}s linear infinite`,
          width: 'fit-content',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TextRunner;
