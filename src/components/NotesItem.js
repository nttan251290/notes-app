import React from "react";
import { Button, Col, Card, Image } from 'react-bootstrap';

import editIcon from '../assest/img/edit.png';
import deleteIcon from '../assest/img/trash.png';

const NotesItem = ({ note, handleEdit, handleDelete }) => {
  const { id, subject, content, color } = note;
  return (
    <Col md="4" className="mb-4">
      <Card bg={color}>
        <Card.Header>
          <h3 className="text-light">{subject}</h3>
        </Card.Header>
        <Card.Body>
          <p className="card-text text-light">{content}</p>
        </Card.Body>
        <Card.Footer>
          <div className="float-right">
            <Button 
              variant="light"
              className="mx-2"
              onClick={() => handleEdit(id)}
            >
              <Image src={editIcon} className="img_edit" />
            </Button>
            <Button
              variant="light"
              className="mx-2"
              onClick={() => handleDelete(id)}
            >
              <Image src={deleteIcon} className="img_delete" />
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NotesItem;
