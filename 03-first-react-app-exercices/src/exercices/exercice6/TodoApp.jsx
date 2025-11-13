import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [dataLoad, setDataLoad] = useState(0);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]); // utiliser le state et le "setter" associé
    };


    const loadTodos = async () => {
        // async
        console.log('avant le fetch');
        const response = await fetch('https://dummyjson.com/todos?limit=10')
        const json = await response.json();
        setTodos(json.todos);
        console.log('apres le fetch');
        setDataLoad(1);
    };

    const fetchTodos = async () => {
        // async
        console.log('avant le fetch');
        const response = await fetch('https://dummyjson.com/todos?limit=10')
        const json = await response.json();
        return (json.todos);
    };


    useEffect(() => {
       console.log('avant le loadTodos');
       if(!dataLoad) {
            console.log('fetch loadTodos');
            // ce n'est pas recommandé d'appeler une fonction async qui modifie le state en dehors de useEffect
            // loadTodos(); // appel de la fonction asynchrone
            
            // meilleure pratique : définir une fonction asynchrone à l'intérieur de useEffect
            // ou utiliser directement une promesse
            fetchTodos().then((loadedTodos) => {
                setTodos(loadedTodos);
                setDataLoad(1);
            });
       }
       console.log('apres le loadTodos');
    }, [dataLoad]); // tableau de dépendances vide => s'exécute une seule fois au montage du composant

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo onSubmit={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoApp;
