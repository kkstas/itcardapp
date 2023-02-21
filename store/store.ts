import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userInfo";
import userPreferencesReducer from "../features/userPreferences/userPreferencesSlice";
import ticketDataReducer from "../features/tickets/ticketFormSlice";
import documentsDataReducer from "./slices/documentsData";

export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    userPreferences: userPreferencesReducer,
    ticketData: ticketDataReducer,
    documentsData: documentsDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
