import React, { Component, useState, useContext } from "react";
import Card from 'react-bootstrap/Card'



  //creating context
  const PostContext = React.createContext()

  class PostProvider extends Component {
      state = {
          date: Date.now(),
          author: "ktonner",
          title: "Test",
          text: "test",
          tags: ["test", "one", "two"]
      }
      render() {
          return (
              <PostContext.Provider value={{
                  state: this.state
              }}>
                  {this.props.children}
              </PostContext.Provider>
          )
      }
  };




const Post = () => {
    return (
        <PostProvider>
        <PostContext.Consumer>
            {(context) => (
                <Card>
                    <Card.Header className="text-muted">{context.state.date}</Card.Header>
                    <Card.Body>
                        <Card.Title>{context.state.title}</Card.Title>
                        <Card.Text>
                            {context.state.text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {
                            //Map loops over tags and formats them
                            (context.state.tags).map(tag => {
                                return (
                                    <p style={{ display: "inline" }}>#{tag} </p>
                                )
                            })
                        }
                    </Card.Footer>
                </Card>
            )}
        </PostContext.Consumer>
        </PostProvider>
    )
}

export default Post