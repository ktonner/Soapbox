import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import API from "../../utils/postsAPI"
import { UserContext } from "../../utils/UserContext";

function CreatePost() {
  const [user, dispatch] = useContext(UserContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [tags, setTags] = useState("")




  function handleFormSubmit(event) {
    console.log("This is the user", user)
    event.preventDefault();
    console.log(title, text, tags)
    if (title && text) {
      API.savePost({
        title,
        text,
        tags,
        author: user.username,
        authorID: user.id
      }, user.id)
        .then(res =>
          handleClose())
        .catch(err => console.log(err));
    }
  };


  return (
    <div>
      <div>
        <Button style={{color: "white", fontSize: "20px", border: "2px solid rgb(57, 137, 187)"}} className="btn btn-primary mb-3" onClick={handleShow}>Create Post</Button>{' '}
      </div>
      <>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form.Group>
                <h2>Title</h2>
                <Form.Control size="lg" type="text" placeholder="Large text" name="title" onChange={(e) => setTitle(e.target.value)} />
                <br />
              </Form.Group>
              {/* <div className="mb-3">
                <Form.File id="formcheck-api-regular" input type="file" id="img" name="img" accept="image/*" onChange={handleImage()}>
                  <Form.File.Label>Post an Image</Form.File.Label>
                  <Form.File.Input />
                </Form.File>
              </div>
              <br /> */}
              <Form.Group>
                <Form.Label>Post</Form.Label>
                <Form.Control as="textarea" rows="5" placeholder="Message" id="message" name="text" onChange={(e) => setText(e.target.value)} />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control size="sm" type="text" placeholder="Tags" name="tags" onChange={(e) => setTags(e.target.value)} />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleFormSubmit}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )

}

export default CreatePost