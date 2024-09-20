import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { todoList } from './store/todolist_Context';

function App() {
  const [todoItems, settodoItems] = useState([]);

  const addTodoItem = (id, name, date) => {
    const newTodoItem = { id, name, date };
    settodoItems([...todoItems, newTodoItem]);
  };

  const deleteTodoItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    settodoItems(newTodoItems);
  };

  const updateTodoItem = (id, name, date) => {
    const updatedItems = todoItems.map((item) =>
      item.id === id ? { id, name, date } : item
    );
    settodoItems(updatedItems);
  };

  return (
    <todoList.Provider value={{ todoItems, addTodoItem, deleteTodoItem, updateTodoItem }}>
      <Outlet />
    </todoList.Provider>
  );
}

export default App;
