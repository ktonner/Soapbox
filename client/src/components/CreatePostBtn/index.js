import React, { useState } from "react";
import Button from 'react-bootstrap/Button'

import Modal from 'react-bootstrap/Modal'

function CreatePost() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  return (
    <div>
    <div>
      <Button variant="outline-primary" onClick={handleShow}>Create Post</Button>{' '}
    </div>
    <>
        <Modal show={show}  onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  </div>
  )

}

export default CreatePost