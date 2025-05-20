import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { usersApi } from '../../entities/users/model/api'

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
