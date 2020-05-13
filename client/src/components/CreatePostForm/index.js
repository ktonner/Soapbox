import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


export default function CreatePostForm() {
  return (
    <div>
    <Form.Group controlId="formBasicTitle">
      <h2>Title</h2>
      <Form.Control size="lg" type="text" placeholder="Large text" name="title" />
      <br />
    </Form.Group>
    <Form.Group controlId="formGroupMessage">
      <Form.Label>Post</Form.Label>
      <Form.Control as="textarea" rows="5" placeholder="Message" id="message" name="text" />
    </Form.Group>
    <br />
    <Form.Group controlId="formBasicTags">
      <Form.Control size="sm" type="text" placeholder="Tags" name="tags" />
    </Form.Group>
    </div>
  )
}