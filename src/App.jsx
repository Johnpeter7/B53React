// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('notCompleted');
  const [statusFilter, setStatusFilter] = useState('all');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addOrUpdateTodo = () => {
    if (editingTodoId !== null) {
      // Update existing todo
      const updatedTodos = todos.map(todo =>
        todo.id === editingTodoId
          ? { ...todo, taskName, description, status }
          : todo
      );

      setTodos(updatedTodos);
      setEditingTodoId(null);
    } else {
      // Create new todo
      const newTodo = {
        id: todos.length + 1,
        taskName,
        description,
        status,
      };

      setTodos([...todos, newTodo]);
    }

    clearForm();
  };

  const clearForm = () => {
    setTaskName('');
    setDescription('');
    setStatus('notCompleted');
  };

  const toggleStatus = (todoId) => {
    setTodos(todos.map(todo =>
      todo.id === todoId ? { ...todo, status: todo.status === 'notCompleted' ? 'completed' : 'notCompleted' } : todo
    ));
  };

  const editTodo = (todoId) => {
    const todoToEdit = todos.find(todo => todo.id === todoId);
    setTaskName(todoToEdit.taskName);
    setDescription(todoToEdit.description);
    setStatus(todoToEdit.status);
    setEditingTodoId(todoId);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const filterTodos = () => {
    if (statusFilter === 'all') {
      return todos;
    } else {
      return todos.filter(todo => todo.status === statusFilter);
    }
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>

      <div className="form-container">

        <input type="text" id="taskName" placeholder="Todo Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />

        <input type="text" id="description" placeholder="Todo Description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <button onClick={addOrUpdateTodo}>{editingTodoId !== null ? 'Update Todo' : 'Add Todo'}</button>
      </div>

      <div className="filter-container">
        <label htmlFor="statusFilter">Status Filter:</label>
        <select id="statusFilter" onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </div>

      <div className="todos-container">
        {filterTodos().map(todo => (
          <div key={todo.id} className="todo-card">
            <h3>Name:{todo.taskName}</h3>
            <p>Description:{todo.description}</p>
            <p>Status: <span onClick={() => toggleStatus(todo.id)} className="status">{todo.status}</span></p>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
