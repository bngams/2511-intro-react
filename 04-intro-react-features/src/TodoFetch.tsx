import { useState } from "react";
import type { Todo } from "./models/Todo";

function TodoFetch() {

    const [todos, setTodos] = useState<Todo[]>([]);


    return (
        <div>
            <h2>Todos depuis l'API</h2>
            <ul>
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoFetch;