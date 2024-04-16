import * as yup from 'yup';
import { infoFormSchema, loginFormSchema } from '../libs/validation';

export type InfoFormType = yup.InferType<typeof infoFormSchema>;

export type LoginType = {
  username: string;
  password: string;
};

export type LoginResponseType = {
  refresh: string;
  access: string;
};

export type LoginFormType = yup.InferType<typeof loginFormSchema>;
