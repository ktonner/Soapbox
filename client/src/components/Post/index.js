import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { handleFollow, newFollower } from "../../utils/accountsAPI"
import PostContext from "../../utils/PostContext"


const Post = () => {

    const {date, author, title, text, tags} = useContext(PostContext)

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
                        <Card.Header className="text-muted">Posted by {author} at {date}
                            <Button onClick={() => handleClick({author})}>Follow</Button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {
                                //Map loops over tags and formats them
                                (tags).map((tag, index) => {
                                    return (
                                        <p key={index} style={{ display: "inline" }}>#{tag} </p>
                                    )
                                })
                            }
                        </Card.Footer>
                    </Card>
                )}

export default Post