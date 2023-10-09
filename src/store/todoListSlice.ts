import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../interfaces/Todo";
import { TodoData } from "../mockData/mockTodos";
import type { RootState } from "../store";

interface TodoListState {
  todos: Todo[];
}

const initialState: TodoListState = {
  todos: TodoData,
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<String>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const { id } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex] = action.payload;
      }
    },
  },
});

export const selectTodos = (state: RootState) => state.todoList.todos;
export const { addTodo, removeTodo, updateTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
