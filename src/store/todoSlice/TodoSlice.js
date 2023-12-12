import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [action.payload, ...state.list];
      //   state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
      message.success(`Todo deleted, id: ${action.payload}`);
    },
    checkTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );

      state.list = state.list.sort((a, b) => a.checked - b.checked);
    },
    editTodo: (state, action) => {
      state.list = state.list.map((todo) => {
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, checkTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
