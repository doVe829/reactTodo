import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./todoListSlice";

export const store = configureStore({
  reducer: {
    todoList: todoListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatsch = typeof store.dispatch;
