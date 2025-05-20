import { combineReducers } from '@reduxjs/toolkit'

import { usersApi } from '../../entities/users/model/api'
import { gymManagerReducer } from '../../entities/users/model/gymManagerSlice'

export const rootReducer = combineReducers({
	gymManager: gymManagerReducer,
	[usersApi.reducerPath]: usersApi.reducer,
})
