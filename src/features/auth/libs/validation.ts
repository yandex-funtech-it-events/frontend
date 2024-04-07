import * as yup from 'yup';

export const infoFormSchema = yup.object({
  name: yup.string().required('Обязательное поле'),
  last_name: yup.string().required('Обязательное поле'),
  email: yup.string().email('Не верный формат email').required('Обязательное поле'),
  phone: yup.string().required('Обязательное поле'),
  work: yup.string().required('Обязательное поле'),
  position: yup.string().required('Обязательное поле'),
  experience: yup.string().required('Обязательное поле'),
  agree_personal_info: yup.bool().oneOf([true], 'Обязательное поле').required('Обязательное поле'),
  agree_publish_cv: yup.bool(),
  icon: yup
    .mixed<File>()
    .nullable()
    .test('fileFormat', 'Не верный формат, разрешены: jpg, jpeg, png, gif', (value) => {
      const file = value as File;
      return !file || ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'].includes(file?.type);
    })
    .test('fileSize', 'Превышен размер файла, максимальный 5MB', (value) => {
      const file = value as File;
      return !file || file?.size < 1024 * 1024 * 5;
    }),
});
