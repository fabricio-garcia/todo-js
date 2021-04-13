import React, { useState } from 'react';
import Header from './components/Header';
import FormTodos from './components/FormTodos';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, changeTodos] = useState([
    {
      id: '1',
      text: 'Tarea 1',
      status: true,
    },
    {
      id: '2',
      text: 'Tarea 2',
      status: false,
    },
  ]);

  console.log(todos);

  return (
    <div className="container">
      <Header />
      <FormTodos todos={todos} changeTodos={changeTodos} />
      <TodoList todos={todos} changeTodos={changeTodos} />
    </div>
  );
};

export default App;
