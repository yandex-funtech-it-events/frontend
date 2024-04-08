import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Community: React.FC = () => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ marginBottom: '187px' }}
    >
      <Typography component="h2" variant="h2" mb={6} alignSelf="start">
        Сообщество
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="16px"
        p={5}
        sx={{ background: '#E0E0E0', maxWidth: '912px' }}
      >
        <Typography component="h3" mt={0} mb={3}>
          Заголовок
        </Typography>
        <Typography component="p" mt={0} mb={8}>
          The studio's approach to design encompasses a wide range of scales, from micro to global,
          and treats each project as a laboratory for testing future models of urban inhabitation.
          Their focus is on creating scalable nature-based solutions to address the challenges faced
          by contemporary cities in achieving carbon neutrality and mitigating climate change
          effects.
        </Typography>
        <Button sx={{ width: '115px', alignSelf: 'end' }}>Переход</Button>
      </Box>
    </Box>
  );
};

export default Community;
