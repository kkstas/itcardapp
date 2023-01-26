import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userInfo";
import userPreferencesReducer from "./slices/userPreferences";
import ticketDataReducer from "./slices/ticketData";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    userPreferences: userPreferencesReducer,
    ticketData: ticketDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
