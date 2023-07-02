import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IServerResponse, IUser } from '../../types/models';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com',
  }),
  endpoints: builder => ({
    searchUsers: builder.query<IUser[], string>({
      query: (search: string) => ({
        url: '/search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: IServerResponse) => response.items,
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
