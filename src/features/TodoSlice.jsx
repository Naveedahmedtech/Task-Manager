import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: JSON.parse(localStorage.getItem("todos")) || [] };

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action) {
        state.todos.push(action.payload);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      },
    },
    todoRemoved: {
      reducer(state, action) {
        const id = action.payload;
        state.todos = state.todos.filter((todo) => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      },
    },
    todoIsCompleted: {
      reducer(state, action) {
        const { id, completed } = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.completed = completed;
          localStorage.setItem("todos", JSON.stringify(state.todos));
        }
      },
    },
    todoUpdated: {
      reducer(state, action) {
        const { id, title } = action.payload;
        const todo = state.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.title = title;
          localStorage.setItem("todos", JSON.stringify(state.todos));
        }
      },
    },
  },
});

export const selectState = (state) => state.todo.todos.slice().reverse();

export const { todoAdded, todoRemoved, todoIsCompleted, todoUpdated } = TodoSlice.actions;

export default TodoSlice.reducer;
