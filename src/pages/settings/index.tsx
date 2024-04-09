import { FormControlLabel, Stack, Switch, Typography } from '@mui/material';
import * as React from 'react';

import ProfileInfo from './components/profile-info.tsx';

const SettingPage = () => {
  return (
    <Stack spacing={13}>
      <ProfileInfo />

      <Stack spacing={10}>
        <Typography variant="h3">Настройка персональной афиши</Typography>
      </Stack>

      <Stack spacing={10}>
        <Typography variant="h3">Настройка уведомлений</Typography>

        <Stack
          spacing={4}
          pt={6}
          px={8}
          pb={8}
          borderRadius={5}
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <FormControlLabel control={<Switch />} label="Напомнить начале события" />
          <FormControlLabel control={<Switch />} label="Получать информацию о новых событиях " />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SettingPage;
