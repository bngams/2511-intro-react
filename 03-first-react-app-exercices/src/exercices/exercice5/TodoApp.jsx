import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        // setTodos(todos.concat(newTodo));
        setTodos([...todos, newTodo]); // utiliser le state et le "setter" associé
    };

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo onSubmit={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoApp;