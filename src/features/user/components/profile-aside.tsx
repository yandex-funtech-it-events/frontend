import { Box } from '@mui/material';
import Navigation from '../../../components/navigation.tsx';

const ProfileAside = () => {
  return (
    <Box
      component="aside"
      width={1}
      maxWidth={266}
      borderRadius={5}
      py={5}
      px={4}
      sx={{
        height: 'fit-content',
        background: 'white',
        position: 'fixed',
      }}
    >
      <Navigation />
    </Box>
  );
};

export default ProfileAside;
