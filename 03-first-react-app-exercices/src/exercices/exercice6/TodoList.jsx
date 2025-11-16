import { use, useEffect } from "react";

function TodoList({todos}) {

    useEffect(() => {
        console.log('TodoList updated', todos);
    }, [todos]);

    return (
        <div>
            <h2>Liste des tâches</h2>
            <ul>
                {todos.length === 0 ? (
                    <p>Liste vide</p>
                ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>{todo.todo}</li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;