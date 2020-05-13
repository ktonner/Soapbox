import React, { useState, useContext } from "react";
import Card from 'react-bootstrap/Card'



const Post = () => {

    //setting up state, Post info comes in here
    const [postState, setPostState] = useState({
        date: Date,
        title: "Test",
        text: "test",
        tags: ["test", "one", "two"]
    })

    //this is the map loop for the tags
    const tagList = postState.tags
    const tagItems = tagList.map(tag =>{
        return(
            <p style={{display:"inline"}}>#{tag} </p>
        )
    })


return (
    <Card>
        <Card.Header className="text-muted">{postState.date}</Card.Header>
        <Card.Body>
            <Card.Title>{postState.title}</Card.Title>
            <Card.Text>
                {postState.text}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
                {tagItems}
        </Card.Footer>
    </Card>
)    
}

export default Post