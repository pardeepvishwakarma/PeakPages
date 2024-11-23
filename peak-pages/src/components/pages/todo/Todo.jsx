import React from 'react';
import './todo.css';

const Todo = () => {
  return (
    <div className='todo-check'>
      <input className='todo-checkbox' type='checkbox' name="1" id="1" title='' />
      <label for="1">15 mint coding daily</label>
    </div>
  )
}

export default Todo
