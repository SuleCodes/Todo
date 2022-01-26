import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';
import api from './service/apiHelper';
const App = () => {

  const [input, setInput] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(null);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    api.get().then(res => {
      setTodos(res);
    });
  }, [api]);

  useEffect(() => {
    api.save(todos).then(res => {

    });
  }, [todos, editTodo]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header
          />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            description={description}
            setDescription={setDescription}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
