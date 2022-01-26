import React, { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, description, setDescription, todos, setTodos, editTodo, setEditTodo }) => {


    const updateTodo = (title, id, completed, description) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed, description } : todo
        );
        setTodos(newTodo);
        setEditTodo("");
        setDescription("");
    }
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
            setDescription(editTodo.description);
        } else {
            setInput("");
            setDescription("");
        }
    }, [setInput, editTodo, setDescription])

    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onDescriptionInputChange = (event) => {
        setDescription(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo && todos) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false, description: description }]);
            setInput("");
            setDescription("");
        } else {
            console.log(JSON.stringify(editTodo));
            updateTodo(input, editTodo.id, editTodo.completed, description);
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <ul className='form-list'>
                <li>
                    <input type="text"
                        placeholder="Enter your next todo"
                        className='task-input'
                        value={input}
                        required
                        onChange={onInputChange}>
                    </input>
                    <button className='button-add' type='submit'>
                        {editTodo ? "Ok" : "Add"}
                    </button>
                </li>
                <li>
                    <textarea
                        placeholder="Give some more details..."
                        className='description'
                        value={description}
                        onChange={onDescriptionInputChange} />
                </li>
            </ul>

        </form>
    );
}
export default Form;
