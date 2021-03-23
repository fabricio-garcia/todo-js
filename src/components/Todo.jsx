import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faEdit,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Todo = props => {
  return (
    <li className="todo-list__todo">
      <FontAwesomeIcon
        icon={faCheckSquare}
        className="todo-list__icon todo-list__icon-check"
      />{' '}
      <div className="todo-list__text">{props.todo.text}</div>
      <div className="todo-list__container-buttons">
        <FontAwesomeIcon
          icon={faEdit}
          className="todo-list__icon todo-list__icon-action"
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
