import React from "react";
import { Button, Row, Col } from 'react-bootstrap';
import NotesItem from "./NotesItem";

const NotesList = ({ notes, handleEdit, handleDelete, deleteAll }) => {
  return (
    <>
      <Row className="mb-4">
        <Col className="text-center">
          {notes.length > 0 && (
            <Button variant="warning" onClick={deleteAll}>Clear All Notes</Button>
          )}
        </Col>
      </Row>
      <Row>
        {notes.map(note => (
          <NotesItem
            note={note}
            key={note.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </Row>
    </>
  );
};

export default NotesList;