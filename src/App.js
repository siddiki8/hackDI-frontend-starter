import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:8000'; // Your FastAPI backend URL

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingNote, setEditingNote] = useState(null); // The note being edited

  // Fetch all notes from the backend
  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${API_URL}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  // Handle form submission for creating or updating a note
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }

    const noteData = { title, content };

    try {
      if (editingNote) {
        // Update existing note
        await axios.put(`${API_URL}/notes/${editingNote.id}`, noteData);
      } else {
        // Create new note
        await axios.post(`${API_URL}/notes`, noteData);
      }
      // Reset form and editing state
      setTitle('');
      setContent('');
      setEditingNote(null);
      // Refresh the notes list
      fetchNotes();
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  // Handle editing a note
  const handleEdit = (note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  // Handle deleting a note
  const handleDelete = async (noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await axios.delete(`${API_URL}/notes/${noteId}`);
        fetchNotes(); // Refresh the notes list
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingNote(null);
    setTitle('');
    setContent('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes App</h1>
      </header>
      <main>
        <div className="note-form">
          <h2>{editingNote ? 'Edit Note' : 'Create a new note'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">{editingNote ? 'Update' : 'Create'}</button>
            {editingNote && <button type="button" onClick={handleCancelEdit}>Cancel</button>}
          </form>
        </div>
        <div className="notes-list">
          <h2>Your Notes</h2>
          {notes.length > 0 ? (
            <ul>
              {notes.map((note) => (
                <li key={note.id}>
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
                  <div className="note-actions">
                    <button onClick={() => handleEdit(note)}>Edit</button>
                    <button onClick={() => handleDelete(note.id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No notes yet. Create one!</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
