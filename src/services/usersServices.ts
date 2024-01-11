import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { HTTPParameters } from '../httpParameters';
import { IUser } from '../interface';

export const userServices = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${HTTPParameters}` }),
  endpoints: (build) => ({
    getAllUsers: build.query<IUser[], void>({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
  reducerPath: 'userServices',
});

export const { useGetAllUsersQuery } = userServices;
