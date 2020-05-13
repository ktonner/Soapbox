import React, { useState, useContext } from "react";
import Card from 'react-bootstrap/Card'



const Post = () => {

    const [postState, setPostState] = useState({
        date: Date,
        title: "Test",
        text: "test",
        tags: "test"
    })

        return(
        <Card>
            <Card.Header className="text-muted">{postState.date}</Card.Header>
            <Card.Body>
                <Card.Title>{postState.title}</Card.Title>
                <Card.Text>
                    {postState.text}
    </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                {postState.tags}.map((tag)=>{
                    <p>"#"+tag+" "</p>
                })
            </Card.Footer>
        </Card>
        )    
}

export default Post