import TodoItem from "./TodoItem";
function TodoItems({ todoitems }) {
  return (
    <div className="todo-container">
      {todoitems.map((items) => (
        <TodoItem todoDate={items.duedate} todoName={items.name}></TodoItem>
      ))}
    </div>
  );
}

export default TodoItems;
