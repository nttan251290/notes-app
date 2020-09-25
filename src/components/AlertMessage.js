import React from "react";
import { Alert } from 'react-bootstrap';

const AlertMessage = ({ type, text }) => {
  return (
    <Alert variant={type}>{text}</Alert>
  );
};

export default AlertMessage;
