import React, { useState } from 'react';
import Header from './components/Header';
import FormTodos from './components/FormTodos';
import './App.css';

const App = () => {
  const [todos, changeTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
      completed: false,
    },
    {
      id: 1,
      text: 'Todo 2',
      completed: false,
    },
    {
      id: 1,
      text: 'Todo 3',
      completed: true,
    },
  ]);

  console.log(todos);

  return (
    <div className="container">
      <Header />
      <FormTodos todos={todos} changeTodos={changeTodos} />
    </div>
  );
};

export default App;
