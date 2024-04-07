import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { InfoFormType } from '../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { infoFormSchema } from '../../libs/validation';
import {
  experienceDataMock,
  infoFormDefaultValues,
  positionDataMock,
} from '../../libs/constants.ts';
import UploadImg from './components/upload-img.tsx';

const InfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
    trigger,
  } = useForm<InfoFormType>({
    defaultValues: infoFormDefaultValues,
    resolver: yupResolver(infoFormSchema),
  });

  const onSubmit: SubmitHandler<InfoFormType> = (data) => {
    console.log(data);
  };
  console.log({ errors, val: getValues() });
  return (
    <Box
      px={15}
      pt={15}
      pb={20}
      borderRadius={5}
      width={1}
      sx={{
        background: 'white',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={11}>
          <Box display="flex" alignItems="center" gap={4} width={1}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Имя кириллицей *"
                  variant="outlined"
                  error={!!errors?.name}
                  helperText={errors?.name ? (errors?.name?.message as string) : null}
                  {...field}
                />
              )}
            />

            <Controller
              name="last_name"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Фамилия кириллицей *"
                  variant="outlined"
                  error={!!errors?.last_name}
                  helperText={errors?.last_name ? (errors?.last_name?.message as string) : null}
                  {...field}
                />
              )}
            />
          </Box>

          <Box display="flex" alignItems="center" gap={4}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Телефон *"
                  variant="outlined"
                  error={!!errors?.phone}
                  helperText={errors?.phone ? (errors?.phone?.message as string) : null}
                  {...field}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Почта *"
                  variant="outlined"
                  error={!!errors?.email}
                  helperText={errors?.email ? (errors?.email?.message as string) : null}
                  {...field}
                />
              )}
            />
          </Box>

          <Controller
            name="work"
            control={control}
            render={({ field }) => (
              <TextField
                label="Место работы *"
                variant="outlined"
                error={!!errors?.work}
                helperText={errors?.work ? (errors?.work?.message as string) : null}
                {...field}
              />
            )}
          />

          <Stack spacing={5}>
            <Typography variant="h6">Опыт работы *</Typography>
            <Controller
              name="experience"
              control={control}
              render={({ field }) => (
                <>
                  <Box display="flex" gap={3}>
                    {experienceDataMock.map((item) => (
                      <Chip
                        key={item.label}
                        size="medium"
                        label={item.label}
                        onClick={() => {
                          field.onChange();
                          setValue('experience', item.label);
                          trigger('experience');
                        }}
                        sx={{
                          color: getValues().experience === item.label ? 'white' : '',
                          background:
                            getValues().experience === item.label ? 'rgba(0, 0, 0, 0.70)' : '',
                          '&:hover': {
                            background:
                              getValues().experience === item.label ? 'rgba(0, 0, 0, 0.87)' : '',
                          },
                        }}
                      />
                    ))}
                  </Box>
                  {errors?.experience && (
                    <FormHelperText
                      sx={{
                        color: '#d32f2f',
                      }}
                    >
                      {errors?.experience?.message as string}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </Stack>

          <Stack spacing={5}>
            <Typography variant="h6">Направление работы *</Typography>
            <Controller
              name="position"
              control={control}
              render={({ field }) => (
                <>
                  <Box display="flex" gap={3}>
                    {positionDataMock.map((item) => (
                      <Chip
                        key={item.label}
                        size="medium"
                        label={item.label}
                        onClick={() => {
                          field.onChange();
                          setValue('position', item.label);
                          trigger('position');
                        }}
                        sx={{
                          color: getValues().position === item.label ? 'white' : '',
                          background:
                            getValues().position === item.label ? 'rgba(0, 0, 0, 0.70)' : '',
                          '&:hover': {
                            background:
                              getValues().position === item.label ? 'rgba(0, 0, 0, 0.87)' : '',
                          },
                        }}
                      />
                    ))}
                  </Box>
                  {errors?.position && (
                    <FormHelperText
                      sx={{
                        color: '#d32f2f',
                      }}
                    >
                      {errors?.position?.message as string}
                    </FormHelperText>
                  )}
                </>
              )}
            />
          </Stack>

          <Controller
            name="icon"
            control={control}
            render={({ field }) => (
              <Stack spacing={2}>
                <UploadImg value={field.value} onChange={field.onChange} />
                {errors?.icon && (
                  <FormHelperText
                    sx={{
                      color: '#d32f2f',
                    }}
                  >
                    {errors?.icon?.message as string}
                  </FormHelperText>
                )}
              </Stack>
            )}
          />

          <Stack spacing={8}>
            <Stack>
              <Controller
                name="agree_personal_info"
                control={control}
                render={({ field }) => (
                  <>
                    <FormControlLabel
                      control={<Checkbox checked={field.value} onChange={field.onChange} />}
                      label="Согласие на передачу анкеты, содержащей персональные данные *"
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          fontSize: '15px',
                        },
                      }}
                    />
                    {errors?.agree_personal_info && (
                      <FormHelperText
                        sx={{
                          color: '#d32f2f',
                        }}
                      >
                        {errors?.agree_personal_info?.message as string}
                      </FormHelperText>
                    )}
                  </>
                )}
              />

              <Controller
                name="agree_publish_cv"
                control={control}
                render={({ field }) => (
                  <>
                    <FormControlLabel
                      control={<Checkbox checked={field.value} onChange={field.onChange} />}
                      label="Согласие на передачу резюме, содержащего персональные данные"
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          fontSize: '15px',
                        },
                      }}
                    />
                    {errors?.agree_publish_cv && (
                      <FormHelperText
                        sx={{
                          color: '#d32f2f',
                        }}
                      >
                        {errors?.agree_publish_cv?.message as string}
                      </FormHelperText>
                    )}
                  </>
                )}
              />
            </Stack>

            <Button
              type="submit"
              color="secondary"
              sx={{
                width: 'fit-content',
              }}
            >
              Сохранить
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};

export default InfoForm;
