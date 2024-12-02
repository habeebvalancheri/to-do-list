import React, { useState } from 'react';

export const TodoForm = ({ addTodo, todos }) => {
  const [value, setValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.trim()) {
      const results = todos.filter(todo =>
        todo.task.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = value.trim();
    if (trimmedValue) {
      const taskExist = todos.some(todo => todo.task.trim().toLowerCase() === trimmedValue.toLowerCase());
      if (!taskExist) {
        addTodo(trimmedValue);
        setValue('');
        setSearchResults([]);
      }
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="What is the task today"
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">Add Task</button>
      </div>
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map(result => (
            <li key={result.id} className="search-item">{result.task}</li>
          ))}
        </ul>
      )}
    </form>
  );
};
