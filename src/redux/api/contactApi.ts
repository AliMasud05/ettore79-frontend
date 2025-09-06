import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createContact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
    }),
     getContacts: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
      providesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: (data) => ({
        url: `/contact`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Contact"],
    }),
   
  }),
});

export const {
    useCreateContactMutation,
    useGetContactsQuery,
    useDeleteContactMutation,    
    useUpdateContactMutation,

  } = contactApi;
