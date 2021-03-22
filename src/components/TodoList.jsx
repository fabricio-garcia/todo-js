import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>;
        })
      ) : (
        <li className="todo-list__message">~ No Todos ~</li>
      )}
    </ul>
  );
};

export default TodoList;
