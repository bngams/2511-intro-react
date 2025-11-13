import { useState, useEffect } from "react";


function TodoFetch() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const myRequest = fetch('https://dummyjson.com/todos?limit=10');

        myRequest.then((response) => {
            console.log('Response received', response);
            response.json().then((json) => {
                console.log('JSON parsed', json);
                setTodos(json.todos);
            });
        });


        fetch('https://dummyjson.com/todos?limit=10').then((response) => {
            return response.json()
        }).then((json) => {
            setTodos(json.todos);
        });

    }, []) // empty array => run once at component mount

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://dummyjson.com/todos?limit=10');
            const json = await data.json();
            setTodos(json.todos);
        };

        fetchData();
    }, []) // empty array => run once at component mount


    return (
        <div>
            <h2>Todos depuis l'API</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoFetch;