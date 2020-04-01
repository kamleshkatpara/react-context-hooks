import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import API from './constants/API';

function App() {

  const initialState = [];
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(
        (result) => {
          setTodos([...result])
        },
        (error) => {
          console.warn(error);
        }
      )
  }, [])

  const Add = (title) => {
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: uuid(), title: title })
    })
      .then(res => res.json())
      .then(
        (result) => {
          setTodos([...todos, result])
        },
        (error) => {
          console.warn(error);
        }
      )

  }

  const Edit = (id, title) => {
    const updatedtodos = todos.map(todo => {
      if (todo.id === id) {
        fetch(`${API}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title })
        })
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
            },
            (error) => {
              console.warn(error);
            }
          )
        todo.title = title;
      }
      return todo;
    })

    setTodos(updatedtodos);
  }

  const Delete = (id) => {
    const updatedtodos = todos.filter(todo => todo.id !== id);

    fetch(`${API}/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setTodos(updatedtodos);
        },
        (error) => {
          console.warn(error);
        }
      )
  }

  return (
    <div className="container">
      <div className="alert alert-info text-center" role="alert">
        Todo CRUD
        </div>
      <AddTodo Add={Add} />
      <TodoList todos={todos} Edit={Edit} Delete={Delete} />
    </div>
  );
}

export default App;
