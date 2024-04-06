import React from 'react';
import { Box, Container, IconButton } from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import pic from '../../../../assets/images/single_event_info.png';

const Info: React.FC = () => {
  return (
    <Box component="section" display="flex" gap={3} sx={{ border: '1px dashed grey' }}>
      <Container sx={{ border: '1px dashed red' }}></Container>

      <Container
        style={{ padding: 0 }}
        sx={{ border: '1px dashed red', padding: 0, position: 'relative' }}
      >
        <img src={pic as unknown as string} alt="Usual image" style={{ display: 'block' }} />

        <IconButton sx={{ position: 'absolute', right: 20, top: 0 }}>
          <FavoriteBorderIcon sx={{ color: 'black' }} />
        </IconButton>
        <IconButton sx={{ position: 'absolute', right: 20, bottom: 0 }}>
          <ContentCopyOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Info;
