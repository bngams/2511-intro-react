import { useState } from "react";

function AddTodo() {
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
      console.log(event.target.value);
      setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('value from state: ', todo);
        console.log('value from html form: ', event.target.todo.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" value={todo} onChange={handleChange} />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default AddTodo;