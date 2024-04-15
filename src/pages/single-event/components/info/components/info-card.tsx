import React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import pic from '../../../../../assets/images/single_event_info.png';

const InfoCard: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <Box sx={{ padding: 0, position: 'relative' }}>
      <img src={pic as unknown as string} alt="Usual image" style={{ display: 'block' }} />

      <IconButton sx={{ position: 'absolute', right: 12, top: 0 }}>
        <FavoriteBorderIcon sx={{ color: 'white' }} />
      </IconButton>
      <Tooltip
        title={
          <Typography component="span" variant="body2">
            Ссылка скопирована
          </Typography>
        }
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        sx={{ padding: '1px 8px' }}
      >
        <IconButton onClick={handleTooltipOpen} sx={{ position: 'absolute', right: 12, bottom: 0 }}>
          <ContentCopyOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default InfoCard;
