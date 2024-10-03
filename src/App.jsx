import { useState } from 'react';

import './styles/styles.css';

export default function App(){
  const [items, setItems]=useState([{ id: 1, text: 'juice' },{ id: 2, text: 'eggs' }]);
  const [item, setItem]=useState('');

  const [nextId, setNextId] = useState(3); // Start nextId as 3 (since the first two items have IDs 1 and 2)
  return(
    <div>
       <form className='new-item-form' onSubmit={(e) => e.preventDefault()}>
      <div className="form-row">
      <label htmlFor="item">New item</label>

      <input type="text" id='item'
      value={item}
      onChange={e => setItem(e.target.value)}
      />

      </div>
      <button 
          onClick={(e) => {
            e.preventDefault(); 
            if (item.trim()) {
              setItems([
                ...items,
                { id: nextId++, text: item }
              ]);
              setItem(''); 
            }
            setNextId(nextId + 1); 
            setItem('');
          }}
          
        >
      Add
      </button>
      
    </form>

    <h1>Todo List</h1>
   
   <ul>

   {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}

   </ul>
    </div>

  
  )
}