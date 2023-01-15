import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userInfo';
import ticketMediaReducer from './slices/ticketMedia';
import userPreferencesReducer from './slices/userPreferences';

export const store = configureStore({
	reducer: {
		userInfo: userReducer,
		ticketMedia: ticketMediaReducer,
		userPreferences: userPreferencesReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
