import React from 'react';
import './page.css';
import Todo from './todo/Todo';

const Page = () => {
  const day = 40;
  return (
    <div className='page'>
      <div className='page-header'>
        <div className='page-date'>
            <input type="date" id="start" name="trip-start" min="2018-01-01" max="2024-12-31" />
        </div>
        <div className='page-counter'>Day: {day}</div>
      </div>
      <div className='double-divider'></div>
      <div className='quote'>
        <p>"He who knows best knows how little he knows."</p>
        <p className='author'>~ Thomas Jefferson</p>
      </div>
      <div className='rating'>
        <div className='productivity-rating'>
          Productivity
          <div className='field'>
            <input type="number" max="10" min="0" /> / 10
          </div>
        </div>
        <div className='mood-rating'>
          Mood
          <div className='field'>
            <input type="number" max="10" min="0" /> / 10
          </div>
        </div>
      </div>
      <div className='to-do'>
        <h3 className='text-center'>Today's Agenda</h3>
        <div className='todo-list'>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default Page
