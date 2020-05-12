import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import CreatePostForm from '../CreatePostForm/index'

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
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreatePostForm/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
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