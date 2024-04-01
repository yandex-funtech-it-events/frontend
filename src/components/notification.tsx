import { Badge, Box, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notification = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={1} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Typography component="p" sx={{ display: { xs: 'block', md: 'none' } }}>
        Notification
      </Typography>
    </Box>
  );
};

export default Notification;
