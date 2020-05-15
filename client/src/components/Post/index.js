import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { handleFollow, newFollower } from "../../utils/accountsAPI"
import PostContext from "../../utils/PostContext"


const Post = (props) => {

    // const {date, author, title, text, tags} = useContext(PostContext)

    const handleClick = (id) => {
        console.log(id, "Follow")
        handleFollow(id).then(
            data => console.log(data)
        ).catch(err=>{
            console.log(err)
        }
        )
        newFollower(id).then(
            data => console.log(data)
            ).catch(err=>{
                console.log(err)
            }
            )
    }

    return (
                    <Card>
                        <Card.Header className="text-muted">Posted by {props.author} at {props.date}
                            <Button onClick={() => handleClick((props.author))}>Follow</Button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {
                                //Map loops over tags and formats them
                                (props.tags).map((tag, index) => {
                                    return (
                                        <p key={index} style={{ display: "inline" }}>#{tag} </p>
                                    )
                                })
                            }
                        </Card.Footer>
                    </Card>
                )}

export default Post