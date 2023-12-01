import React from 'react';
import {useState} from 'react';
import './App.css';


type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "note title 1",
      content: "content 1"
    },
    {
      id: 2,
      title: "note title 2",
      content: "content 2"
    },
    {
      id: 3,
      title: "note title 3",
      content: "content 3"
    },
    {
      id: 4,
      title: "note title 4",
      content: "content 4"
    },
    {
      id: 5,
      title: "note title 5",
      content: "content 5"
    },
    {
      id: 6,
      title: "note title 6",
      content: "content 6"
    },
    {
      id: 7,
      title: "note title 7",
      content: "content 7"
    },
    {
      id: 8,
      title: "note title 8",
      content: "content 8"
    },
    {
      id: 9,
      title: "note title 9",
      content: "content 9"
    },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  return (
    <div className="app-container">
      <form className="note-form">
        <input
        value={title}
        onChange={(event)=> setTitle(event?.target.value)}
         placeholder="title" required/> 
        <textarea
        value={content}
        onChange={(event)=> setTitle(event?.target.value)}
         placeholder="Content" rows={10} required></textarea>
        <button type="submit">
          Add Note
        </button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
        <div className="note-item">
          <div className="notes-header">
             <button>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default App;
