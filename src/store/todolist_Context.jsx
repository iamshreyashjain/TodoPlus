import { createContext } from "react";

export const todoList = createContext({
  todoItems: [],
  addTodoItem: () => {},
  deleteTodoItem: () => {},
});
