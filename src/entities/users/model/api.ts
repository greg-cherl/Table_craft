import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
	reducerPath: 'users',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: build => ({
		getUsers: build.infiniteQuery<any[], void, number>({
			query: ({ pageParam = 1 }) => `users?_page=${pageParam}&_limit=8`,
			infiniteQueryOptions: {
				initialPageParam: 1,
				getNextPageParam: (lastPage, allPages) => {
					// Проверяйте, что lastPage не пустой
					if (lastPage.length === 0) return undefined
					return allPages.length + 1
				},
			},
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
	useGetUsersInfiniteQuery,
	useDeleteUserMutation,
	useAddUserMutation,
	useUpdateUserMutation,
} = usersApi
