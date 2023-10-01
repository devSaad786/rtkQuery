import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const praciceApi = createApi({
  reducerPath: 'practiceApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: builder => ({
    getPostByName: builder.query<practice, 'string'>({
      query: id => `posts/${id}`,
    }),
  }),
});

export const {useGetPostByNameQuery} = praciceApi;
