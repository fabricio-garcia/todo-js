import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Todo = props => {
  const [editTodo, changeEditTodoState] = useState(false);
  const [currentTodo, modifiedTodo] = useState(props.todo.text);

  const onSubmit = e => {
    e.preventDefault();
    changeEditTodoState(false);
  };

  return (
    <li className="todo-list__todo">
      <FontAwesomeIcon
        icon={props.todo.status ? faCheckSquare : faSquare}
        className="todo-list__icon todo-list__icon-check"
        onClick={() => props.toggleCheckMark(props.todo.id)}
      />{' '}
      <div className="todo-list__text">
        {editTodo ? (
          <form action="" className="form-edit-todo" onSubmit={onSubmit}>
            <input
              type="text"
              name="text"
              className="form-edit-todo__input"
              value={currentTodo}
              onChange={e => modifiedTodo(e.target.value)}
            />
            <button type="submit" className="form-edit-todo__btn">
              Update
            </button>
          </form>
        ) : (
          props.todo.text
        )}
      </div>
      <div className="todo-list__container-buttons">
        <FontAwesomeIcon
          icon={faEdit}
          className="todo-list__icon todo-list__icon-action"
          onClick={() => changeEditTodoState(!editTodo)}
        />{' '}
        <FontAwesomeIcon
          icon={faTimes}
          className="todo-list__icon todo-list__icon-action"
        />{' '}
      </div>
    </li>
  );
};

export default Todo;
