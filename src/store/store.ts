import { configureStore } from "@reduxjs/toolkit";
import notificationsReducer from "./notifications/notifications.slice";

export const awesomeStore = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof awesomeStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof awesomeStore.dispatch;

// reducers are configured with initial state
// actions are created
// components dispatch actions
// actions are caught by reducers (which are functions)
// reducers change the state
// components get the updated state (using selectors)
