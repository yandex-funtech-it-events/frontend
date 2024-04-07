import * as yup from 'yup';
import { infoFormSchema } from '../libs/validation';

export type InfoFormType = yup.InferType<typeof infoFormSchema>;
