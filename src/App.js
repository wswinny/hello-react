import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const [toDoValue, setToDoValue] = useState("");
    const [toDoItems, setToDoItems] = useState([]);

  return (
    <div className="App">
      <ul>
          {toDoItems.map((todoItem) => <li>{todoItem}</li>)}
      </ul>
        <input
            type={"text"}
            value={toDoValue}
            onChange={(event) => setToDoValue(event.target.value)}
        />
        <button onClick={() => {
            toDoItems.push(toDoValue);
            setToDoValue("");
        }}>Add Item</button>
    </div>
  );
}

export default App;
