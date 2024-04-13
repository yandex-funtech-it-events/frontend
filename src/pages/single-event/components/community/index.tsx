import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import TelegramIcon from './components/tg-icon';

const Community: React.FC = () => {
  return (
    <Box component="section" display="flex" flexDirection="column" alignItems="center" mb={20}>
      <Typography component="h2" variant="h3" mb={10} alignSelf="start">
        Сообщество
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius={4}
        pt={5}
        pb={5}
        pl={8}
        pr={8}
        maxWidth="912px"
        sx={{ background: '#F4F1ED', gap: '18px' }}
      >
        <Typography component="h3" variant="h6">
          Кибербезопасность 2024
        </Typography>
        <Typography component="p" variant="body1">
          The studio's approach to design encompasses a wide range of scales, from micro to global,
          and treats each project as a laboratory for testing future models of urban inhabitation.
          Their focus is on creating scalable nature-based solutions to address the challenges faced
          by contemporary cities in achieving carbon neutrality and mitigating climate change
          effects.
        </Typography>
        <Button sx={{ width: '115px', alignSelf: 'end', display: 'flex' }}>
          <Typography mr={2}>Переход</Typography>
          <TelegramIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Community;
