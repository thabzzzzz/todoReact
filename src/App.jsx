import { useState } from 'react';

import './styles/styles.css';

export default function App(){
  useState('');
  return(
    <div>
        <form className='new-item-form'>
      <div className="form-row">
      <label htmlFor="item">New item</label>
      <input type="text" id='item' />
      </div>
      <button className='btn'>Add</button>
      
    </form>

    <h1>Todo List</h1>
    <ul className='list'>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className='btn btn-danger'>
            Delete
          </button>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className='btn btn-danger'>
            Delete
          </button>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            Item 3
          </label>
          <button className='btn btn-danger'>
            Delete
          </button>
        </li>
    </ul>
    </div>

  
  )
}