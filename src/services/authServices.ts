import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HTTPParameters } from '../httpParameters';
import { ILoginUser, IToken } from '../interface';

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${HTTPParameters}` }),
  endpoints: (build) => ({
    loginUser: build.mutation<IToken, ILoginUser>({
      query: (body) => ({
        body,
        method: 'POST',
        url: `/auth/login`,
      }),
    }),
  }),
  reducerPath: 'loginApi',
});

export const { useLoginUserMutation } = authApi;
