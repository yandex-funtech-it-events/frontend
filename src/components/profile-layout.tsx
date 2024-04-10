import { Box } from '@mui/material';
import ProfileAside from '../features/user/components/profile-aside.tsx';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
  return (
    <Box width={1} display="flex" gap={21}>
      <ProfileAside />

      <Box width={1} ml={88}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProfileLayout;
