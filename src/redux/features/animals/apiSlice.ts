import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getAllAnimals: builder.query({
      query: () => "http://localhost:3000",
    }),
  }),
});

//export const { useGetAllCharactersQuery } = apiSlice

export default apiSlice.reducer;
