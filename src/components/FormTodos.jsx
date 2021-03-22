import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const FormTodos = ({ todos, changeTodos }) => {
  const [todoInput, changeTodoInput] = useState('');

  const handleInput = e => {
    changeTodoInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeTodos([
      ...todos,
      {
        id: uuidv4(),
        text: todoInput,
        completed: false,
      },
    ]);
  };

  return (
    <form action="" className="form-todos" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-todos__input"
        placeholder="Add a todo"
        value={todoInput}
        onChange={e => handleInput(e)}
      />
      <button type="submit" className="form-todos__button">
        <FontAwesomeIcon icon={faPlusSquare} className="form-todos__icon-btn" />
      </button>
    </form>
  );
};

export default FormTodos;
