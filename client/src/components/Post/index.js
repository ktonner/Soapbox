import React, { useContext } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { handleFollow, newFollower, getUser } from "../../utils/accountsAPI"



const Post = (props) => {

    const handleClick = (id) => {
        getUser().then(res=>{
            if(res.data.following.includes(id)){
                console.log("already following")
            }
            else{
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
        }})
    }
    
    

    return (
        <div>
                    <Card>
                        <Card.Header className="text-muted">Posted by {props.author} at {props.date}<span> </span>
                            <Button onClick={() => handleClick((props.authorID))}>Follow</Button>
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
                    <br/>
        </div>
                )}

export default Post