import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { animalsSlice } from '../features/animals/animalsSlice'
import { counterSlice } from '../features/counter/counterSlice'
// ...


export const store = configureStore({
    reducer: {
      //counter: counterSlice.reducer,
      animals: animalsSlice.reducer
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch