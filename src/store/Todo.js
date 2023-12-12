import newTodoSlice from "./todoSliceNew/NewTodoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const todo = configureStore({
  reducer: {
    todos: newTodoSlice,
  },
});
