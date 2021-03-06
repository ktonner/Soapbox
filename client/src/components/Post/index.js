import React, { useContext, useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { handleFollow, newFollower, getUser } from "../../utils/accountsAPI"
import { UserContext } from "../../utils/UserContext";
import Moment from 'react-moment';
import 'moment-timezone';


const Post = (props) => {
    const [user, dispatch] = useContext(UserContext);
    const [disabled, setDisabled] = useState(false)
    const [btn, setBtn] = useState("Follow")


    const handleClick = (id) => {
        getUser().then(res => {
            if (res.data.following.includes(id)) {
                console.log("already following")
            }
            else{
        setDisabled(true)
        setBtn("Followed")
        handleFollow(id).then(
            data => console.log(data)
        ).catch(err=>{
            console.log(err)
        }
        )
        newFollower(id).then(
            data => console.log(data)
            ).catch(err=>{
                console.log(err)}
                )
            }
        })
    }

    getUser(props.authorID).then(res => {
        if (res.data.following.includes(props.authorID)) {
            console.log("already following")
            setDisabled(true)
            setBtn("Followed")
        }
    })

    return (
        <div>
                    <Card className="post rounded" border='1px solid black'>
                        <Card.Header className="text-muted">Posted by <b>{props.author}</b> at <Moment format='LL'>{props.date}</Moment><span> </span>
                        {user.id  === props.authorID ? null :
                            <Button onClick={() => handleClick((props.authorID))} disabled={disabled}>{btn}</Button>}
                        </Card.Header>
                        <Card.Body style={{fontFamily: 'Montserrat, Helvetica, Arial, sans-serif'}}>
                            <Card.Title style={{fontWeight: 'bold'}}>{props.title}</Card.Title>
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
    )
}

export default Post