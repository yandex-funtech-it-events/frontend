import React from 'react';
import { Box, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import pic from '../../../../../assets/images/single_event_info.png';

const InfoCard: React.FC = () => {
  return (
    <Box sx={{ border: '1px dashed red', padding: 0, position: 'relative' }}>
      <img src={pic as unknown as string} alt="Usual image" style={{ display: 'block' }} />

      <IconButton sx={{ position: 'absolute', right: 20, top: 0 }}>
        <FavoriteBorderIcon sx={{ color: 'black' }} />
      </IconButton>
      <IconButton sx={{ position: 'absolute', right: 20, bottom: 0 }}>
        <ContentCopyOutlinedIcon sx={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
};

export default InfoCard;
