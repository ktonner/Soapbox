import React, {Component} from "react";
import Button from 'react-bootstrap/Button'

class CreatePost extends React.Component {
  handleClick(){
    
  }

    render() {
      return (
      <div>
      <Button variant="outline-primary" onClick="handleClick">Create Post</Button>{' '}
      </div>
      )
    }
  }

  export default CreatePost