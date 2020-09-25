import React from "react";
import { Row, Button, Col, Form } from 'react-bootstrap';

const NotesForm = ({
  subject,
  content,
  color,
  handleSubject,
  handleContent,
  handleColor,
  handleSubmit,
  edit
}) => {
  return (
    <Form className="mb-4" onSubmit={handleSubmit}>
      <Row>
        <Col md="6">
          <Form.Group>
            <Form.Label htmlFor="subject">Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={handleSubject}
              className="form-control"
              placeholder="Please add your subject..."
            />

            <Form.Label></Form.Label>
            <Form.Label htmlFor="color-note">Color Note</Form.Label>
            <Form.Control as="select" 
                          name="color-note" 
                          id="color-note" 
                          onChange={handleColor}
                          value={color}>
              <option value="primary">Blue</option>
              <option value="secondary">Grey</option>
              <option value="success">Green</option>
              <option value="danger">Red</option>
              <option value="warning">Yellow</option>
              <option value="info">Neon</option>
              <option value="dark">Dark</option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col md="6">
          <Form.Group>
            <Form.Label htmlFor="content">Content</Form.Label>
            <textarea
              type="text"
              name="content"
              id="content"
              value={content}
              onChange={handleContent}
              className="form-control"
              placeholder="You can add multiline..."
            ></textarea>
          </Form.Group>
        </Col>

      </Row>
      <Row>
        <Col className="text-center">
          <Button type="submit" variant="primary" size="lg">{edit ? "Update" : "Add"}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default NotesForm;
