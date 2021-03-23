import React, { useState } from 'react';
import Header from './components/Header';
import FormTodos from './components/FormTodos';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, changeTodos] = useState([]);

  console.log(todos);

  return (
    <div className="container">
      <Header />
      <FormTodos todos={todos} changeTodos={changeTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
