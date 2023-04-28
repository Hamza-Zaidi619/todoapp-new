import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  let update = (event) => {
    setText(event.target.value);
  }

  let addItem = () => {
    items.push(text)
    setItems([...items])
    setText("");
  }

  let editItem = (i) => {
    let edited = prompt("Enter text : ")
    items[i] = edited
    setItems([...items])
  }


  let deleteItem = (i) => {
    items.splice(i,1)// delete kardaiga
    setItems([...items])
// setItems([]);
  }

  let Deleteal=()=>{
    setItems([])
  }

  return (
    <div className="maindiv">
      <div className="centerdiv">
        <h1>TODOAPP</h1>
        <div className='inputField'>
       
          <input onChange={update} type="text" placeholder='Enter item' value={text} />
          <button className='add' onClick={addItem}>+</button>
          <button className='del' onClick={Deleteal}>🗑️</button>
        </div>

        <ol>
          {
            items.map((x, i) => {
              return (
                <div key={i}>
                  <li>{x} <button onClick={() => editItem(i)}>Edit</button><button onClick={() => deleteItem(i)}>Delete</button></li>
                </div>
              )
            })
          }
        </ol>

      </div>
    </div>
  );
}

export default App;
