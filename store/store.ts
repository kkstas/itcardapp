import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userInfo';
import ticketMediaReducer from './slices/ticketMedia';

export const store = configureStore({
	reducer: {
		userInfo: userReducer,
		ticketMedia: ticketMediaReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
