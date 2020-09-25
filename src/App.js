import React, { useState, useEffect } from 'react';
import './styles/App.css';
import uuid from 'uuid';

import NotesList from './components/NotesList';
import NotesForm from './components/NotesForm';
import AlertMessage from './components/AlertMessage';
import { Container } from 'react-bootstrap';

import { 
  LOCAL_STORAGE, 
  NO_NOTES_SHOW,
  TYPE_SUCCESS,
  TYPE_WARNING } from './constant/index.js'

const initialListNote = localStorage.getItem(LOCAL_STORAGE) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE)) : [];

const App = () => {
  const [notes, setNotes] = useState(initialListNote);
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('primary');
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(notes));
  }, [notes]);

  const handleSubject = e => {
    setSubject(e.target.value);
  };

  const handleContent = e => {
    setContent(e.target.value);
  };

  const handleColor = e => {
    setColor(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (subject !== '' && content !== '' && color !== '') {
      if (edit) {
        let editNotes = notes.map(note => {
          return note.id === id ? { ...note, subject, content, color } : note;
        });
        setNotes(editNotes);
        setEdit(false);
        handleAlert({ show: true, type: TYPE_SUCCESS, text: 'Note Updated' });
      } else {
        const newItem = {
          id: uuid(),
          subject,
          content,
          color,
        };
        setNotes([...notes, newItem]);
        handleAlert({ show: true, type: TYPE_SUCCESS, text: 'Note Added' });
      }

      setSubject('');
      setContent('');
      setColor('primary');
    } else {
      handleAlert({
        show: true,
        type: TYPE_WARNING,
        text: 'Subject and Content fields need to be filled.'
      });
    }
  };

  const handleEdit = id => {
    let editedNote = notes.find(note => note.id === id);
    let { subject, content, color } = editedNote;
    setSubject(subject);
    setContent(content);
    setColor(color);
    setEdit(true);
    setId(id);
  };

  const handleDelete = id => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
    handleAlert({ show: true, type: TYPE_SUCCESS, text: 'Note Deleted' });
  };

  const deleteAll = () => {
    setNotes([]);
  };

  return (
    <>
      <Container className="notes-app">
        <h1 className="text-success display-4 text-center my-2">KEEP NOTES</h1>

        {alert.show && <AlertMessage type={alert.type} text={alert.text} />}
        <NotesForm
          subject={subject}
          content={content}
          color={color}
          edit={edit}
          id={id}
          handleSubject={handleSubject}
          handleContent={handleContent}
          handleColor={handleColor}
          handleSubmit={handleSubmit}
        />
        {notes.length > 0 ? (
          <NotesList
            notes={notes}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            deleteAll={deleteAll}
          />
        ) : (
          <h2 className="text-center text-primary">{NO_NOTES_SHOW}</h2>
        )}
      </Container>
    </>
  );
};

export default App;
