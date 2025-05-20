import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: build => ({
		getUsers: build.query<any[], void>({
			query: () => `users`,
			providesTags: ['Users'],
		}),
		deleteUser: build.mutation<void, string>({
			query: id => ({
				url: `users/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Users'],
		}),
		addUser: build.mutation<void, any>({
			query: newUser => ({
				url: 'users',
				method: 'POST',
				body: newUser,
			}),
			invalidatesTags: ['Users'],
		}),
		updateUser: build.mutation<any, any>({
			query: ({ id, updateUser }) => ({
				url: `users/${id}`,
				method: 'PUT',
				body: updateUser,
			}),
		}),
	}),
})

export const {
	useGetUsersQuery,
	useDeleteUserMutation,
	useAddUserMutation,
	useUpdateUserMutation,
} = usersApi
