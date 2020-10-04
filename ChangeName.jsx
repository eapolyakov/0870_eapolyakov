import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddForm() {
  const [sum, setSum] = useState("Alex");
  const [num, setNum] = useState("");

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(String(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="text" value={num} onChange={handleChange} />
  <input type="submit" value="Change" />
  <p> Name is {sum} </p>
  </form>;
}

const el = <AddForm />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
); 
