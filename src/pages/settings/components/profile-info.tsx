import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material';
import { EmailOutlined, Phone } from '@mui/icons-material';
import * as React from 'react';
import { useState } from 'react';
import InfoForm from '../../../features/auth/components/info-form';

const ProfileInfo = () => {
  const [editForm, setEditForm] = useState(false);

  return (
    <Stack spacing={10}>
      <Typography variant="h3">Форма регистрации</Typography>

      <Box display="flex" gap={4}>
        {editForm ? (
          <InfoForm setEditForm={setEditForm} />
        ) : (
          <Stack
            spacing={10}
            pt={6}
            px={8}
            pb={8}
            borderRadius={5}
            sx={{
              background: 'rgba(20, 18, 22, 0.05)',
            }}
          >
            <Box display="flex" gap={8}>
              <Avatar
                sx={{
                  borderRadius: '16px',
                  width: '64px',
                  height: '64px',
                }}
              />

              <Stack spacing={5}>
                <Stack spacing={2}>
                  <Typography variant="h6">Василий Пупкин</Typography>

                  <Box display="flex" gap={5}>
                    <Box display="flex" gap={1}>
                      <EmailOutlined />
                      <Typography variant="body1">VasiPupkin@yandex.ru</Typography>
                    </Box>
                    <Box display="flex" gap={1}>
                      <Phone />
                      <Typography variant="body1">8 916 522 21 34</Typography>
                    </Box>
                  </Box>

                  <Divider />
                </Stack>

                <Box display="flex" gap={10}>
                  <Stack spacing={1}>
                    <Typography variant="subtitle2">Место работы</Typography>
                    <Typography variant="body1" color="text.primary">
                      ИП «Рога и копыта»
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="subtitle2">Опыт работы </Typography>
                    <Typography variant="body1" color="text.primary">
                      больше 10 лет
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="subtitle2">Направление работы</Typography>
                    <Typography variant="body1" color="text.primary">
                      Frontend
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        )}

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          maxWidth={322}
          width={1}
          pt={6}
          px={8}
          pb={8}
          borderRadius={5}
          sx={{
            height: 'fit-content',
            background: '#FF6E2C',
          }}
        >
          <Typography variant="h6" color="white">
            {editForm
              ? 'Вы заполняете данные один раз и регистрируйтесь один клик на мероприятие!'
              : 'Единая форма регистрации на все мероприятия'}
          </Typography>

          {!editForm && (
            <Button
              onClick={() => setEditForm(!editForm)}
              variant="contained"
              size="small"
              sx={{
                width: 'fit-content',
                marginTop: '58px',
                background: '#FF6E2C',
              }}
            >
              редактировать форму
            </Button>
          )}
        </Box>
      </Box>
    </Stack>
  );
};

export default ProfileInfo;
