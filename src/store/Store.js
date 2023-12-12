import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice/TodoSlice";
import data from "./apis/Get-api.js";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    data,
  },
});
