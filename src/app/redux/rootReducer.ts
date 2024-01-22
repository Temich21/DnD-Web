import { combineReducers } from '@reduxjs/toolkit'
import burgerReducer from './reducers/BurgerSlice'
import characterFormReducer from './reducers/characterFormSlice'
// import { todoAPI } from '../services/ToDoService'
// import { userAPI } from '../services/AuthService'

export const rootReducer = combineReducers({
    burgerReducer,
    characterFormReducer,
    // [todoAPI.reducerPath]: todoAPI.reducer,
    // [userAPI.reducerPath]: userAPI.reducer
})

export type RootState = ReturnType<typeof rootReducer>
