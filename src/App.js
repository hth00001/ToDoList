
import React, { useState, useRef } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const addTodo = () => {
    const newTodo = todoInputRef.current.value;
    if (newTodo !== '') {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      todoInputRef.current.value = '';
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>ToDo List</h1>
      <div className="input-container">
        <input type="text" ref={todoInputRef} placeholder="Enter your task" />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={index % 2 === 0 ? 'even' : 'odd'}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#e0e0e0')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
          >
            <span>{todo}</span>
            <button className="remove-button" onClick={() => removeTodo(index)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;