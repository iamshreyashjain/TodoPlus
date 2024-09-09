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
    settodoItems(newTodoItems)
  };

  return (
    <todoList.Provider value={{ todoItems, addTodoItem, deleteTodoItem }}>
      <Outlet />
    </todoList.Provider>
  );
}

export default App;
