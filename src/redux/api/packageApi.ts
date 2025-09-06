import { baseApi } from "./baseApi";

const packageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPackage: builder.mutation({
      query: (data) => ({
        url: "/package",
        method: "POST",
        body: data,
      }),
    }),
    getPackages: builder.query({
      query: () => ({
        url: "/package",
        method: "GET",
      }),
      providesTags: ["Package"],
    }),
    deletePackage: builder.mutation({
      query: (id) => ({
        url: `/package/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Package"],
    }),
    updatePackage: builder.mutation({
      query: ({data, id}) => ({
        url: `/package/${id}`,      
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Package"],
    }),
    getPackageById: builder.query({
      query: (id) => ({
        url: `/package/${id}`,
        method: "GET",
      }),
      providesTags: ["Package"],
    }),
  
  }),
});

export const {
    useCreatePackageMutation,
    useGetPackagesQuery,
    useDeletePackageMutation,    
    useUpdatePackageMutation,
    useGetPackageByIdQuery,
  } = packageApi;
