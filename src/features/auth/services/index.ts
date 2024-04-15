import api from '../../../libs/api.ts';
import { LoginResponseType, LoginType } from '../types';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseType, LoginType>({
      query: (body) => ({
        url: `/login/`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
