import Todo from "./Todo";

const TodoList = ({ todos, changeTodos }) => {
  const toggleCheckMark = (id) => {
    console.log(`Editing todo with id: ${id}`);
    changeTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <ul className="todo-list">
      {todos.length > 0
        ? (
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} toggleCheckMark={toggleCheckMark} />
          ))
        )
        : (
          <li className="todo-list__message">~ THE LIST IS EMPTY ~</li>
        )}
    </ul>
  );
};

export default TodoList;
