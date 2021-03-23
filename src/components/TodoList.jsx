import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map(todo => <Todo key={todo.id} todo={todo} />)
      ) : (
        <li className="todo-list__message">~ THE LIST IS EMPTY ~</li>
      )}
    </ul>
  );
};

export default TodoList;
