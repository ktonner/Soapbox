import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { handleFollow } from "../../utils/accountsAPI"



//creating context
const PostContext = React.createContext()

class PostProvider extends Component {
    state = {
        date: Date.now(),
        author: "5ebd6ba07742c859c49dd2bc",
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

    const handleClick = (id) => {
        console.log(id, "Follow")
        handleFollow(id).then(
            data => console.log(data)
        ).catch(err=>{
            console.log(err)
        }
        )
    }

    return (
        <PostProvider>
            <PostContext.Consumer>
                {(context) => (
                    <Card>
                        <Card.Header className="text-muted">Posted by {context.state.author} at {context.state.date}
                            <Button onClick={() => handleClick(context.state.author)}>Follow</Button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{context.state.title}</Card.Title>
                            <Card.Text>
                                {context.state.text}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {
                                //Map loops over tags and formats them
                                (context.state.tags).map((tag, index) => {
                                    return (
                                        <p key={index} style={{ display: "inline" }}>#{tag} </p>
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