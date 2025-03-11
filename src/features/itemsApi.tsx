import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: (search) => `/posts${search ? `?q=${search}` : ""}`,
    }),
  }),
});

export const { useGetItemsQuery } = itemsApi;
