import * as yup from 'yup';
import { infoFormSchema } from '../libs/validation';

export type InfoFormType = yup.InferType<typeof infoFormSchema>;

export type LoginType = {
  name: string;
  email: string;
};

export type LoginResponseType = {
  access: string;
};
