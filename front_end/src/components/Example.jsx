import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FloatingLabel, Form} from 'react-bootstrap'

function Example() {
  {/* this value takes in a prop and reders the */}
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i variant="primary" onClick={handleShow} className="fa-solid fa-pen-to-square"/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Title"
        className="mb-3"
      >
      <Form.Control as="textarea" placeholder="Leave a comment here" value={title} onChange={e => setTitle(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Description">
        <Form.Control
          as="textarea"
          value={description}
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          onChange={e => setDescription(e.target.value)}
        />
      </FloatingLabel>
        </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example
