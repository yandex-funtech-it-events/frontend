import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

const TextRunnerCircle = ({ text, duration = 10 }: { text: string; duration?: number }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = text.split('');
      const styledText = letters
        .map(
          (letter, index) =>
            `<span style='position: absolute; transform: rotate(${index * 10}deg); transform-origin: 0 80px;'>${letter}</span>`
        )
        .join('');
      textRef.current.innerHTML = styledText;
    }
  }, [text]);

  return (
    <Box
      borderRadius="50%"
      sx={{
        display: 'grid',
        placeItems: 'center',
        position: 'relative',
      }}
    >
      <Typography
        ref={textRef}
        variant="body1"
        sx={{
          height: '160px',
          animation: `rotate ${duration}s linear infinite`,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default TextRunnerCircle;
