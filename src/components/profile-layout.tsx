import { Box, Container } from '@mui/material';
import ProfileAside from '../features/user/components/profile-aside.tsx';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
  return (
    <Container>
      <Box width={1} mt={24} mb={17} display="flex" gap={21}>
        <ProfileAside />

        <Box width={1} ml={87}>
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileLayout;
