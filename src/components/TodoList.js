import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
    const [startDate, setStartDate] = useState(new Date());
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed, description: item.description }
                }
            })
        );
    };
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    };
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            {todos && todos.map((todo) => (
                <div key={todo.id}>
                    <li className='list-item'>
                        <input
                            type='text'
                            value={todo.title}
                            className={`list ${todo.completed ? 'complete' : ''}`}
                            onChange={(event) => event.preventDefault()}
                        />
                        <div>
                            <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                                <i className='fa fa-check-circle'></i>
                            </button>
                            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                                <i className='fa fa-edit'></i>
                            </button>
                            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                                <i className='fa fa-trash'></i>
                            </button>
                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        </div>
                    </li>
                    <textarea readOnly
                        type='text'
                        value={todo.description}
                        className={`description ${todo.completed ? 'complete' : ''}`}
                    />

                </div>

            ))}
        </div>
    );
}

export default TodoList;