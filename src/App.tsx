import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <form className="note-form">
        <input placeholder="title" required/> 
        <textarea placeholder="Content" rows={10} required></textarea>
        <button type="submit"></button>
      </form>
      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header"> 
             <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note Content</p>
        </div>
      </div>
    </div>
  )
}

export default App;
