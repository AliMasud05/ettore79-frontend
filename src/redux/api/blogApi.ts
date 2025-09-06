import { baseApi } from "./baseApi";

const uploaderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
    }),
     getAllBlogs: builder.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "GET",
      }),
      providesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: `/blog`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),
   
  }),
});

export const {
    useCreateBlogMutation,
    useGetAllBlogsQuery,
    useGetSingleBlogQuery,
    useDeleteBlogMutation,    
    useUpdateBlogMutation,

  } = uploaderApi;
