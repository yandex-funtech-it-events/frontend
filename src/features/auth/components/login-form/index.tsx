import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormType } from '../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../../libs/validation.ts';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../services';
import Snack from '../../../../components/snack.tsx';
import { useModal } from '../../../../hooks/use-modal.ts';

const LoginForm = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose, setInfo, modalInfo } = useModal();
  const [login] = useLoginMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormType>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const res = await login(data);
    if ('data' in res) {
      setInfo({ text: 'С возвращением!' });
      onOpen('login');
      navigate('/');
    } else {
      setInfo({ text: 'Ошибка', variant: 'error' });
      onOpen('login');
    }
  };

  return (
    <Box
      maxWidth={560}
      width={1}
      height={1}
      sx={{
        display: 'grid',
        placeItems: 'center',
        margin: '0 auto',
      }}
    >
      <Snack
        isOpen={isOpen}
        onClose={onClose}
        variant={modalInfo?.variant ? modalInfo.variant : 'success'}
        text={modalInfo?.text as string}
      />

      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Stack spacing={5}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                label="Имя кириллицей *"
                variant="outlined"
                error={!!errors?.username}
                helperText={errors?.username ? (errors?.username?.message as string) : null}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                label="Пароль *"
                variant="outlined"
                error={!!errors?.password}
                helperText={errors?.password ? (errors?.password?.message as string) : null}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: 'fit-content',
              alignSelf: 'center',
            }}
          >
            Войти
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
