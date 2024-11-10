import AppName from "./components/appName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
function App() {
  const todoitems = [
    {
      name: "buy milk",
      duedate: "4/10/2024",
    },
    {
      name: "go to college",
      duedate: "4/10/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoitems={todoitems}></TodoItems>
    </center>
  );
}

export default App;
