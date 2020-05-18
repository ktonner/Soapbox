import React, { useEffect, useState } from "react"
import { getUser, getUserFromID } from "../../utils/accountsAPI"
import ListGroup from 'react-bootstrap/ListGroup'

function FollowedList() {

    const [followings, setFollowing] = useState([])

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        getUser().then(res => {
            console.log(res.data.following)
            res.data.following.map((account) => {
                getUserFromID(account)
                .then(res => {
                    followings.push(res.data.username)
                })
            })
            console.log(followings)
        })
            .catch(err => console.log(err));
    };



    return (
        <div>
            <h4>test</h4>
            <h4>{followings[0]}</h4>
            <ListGroup>
                {followings.map(account => {
                    return (
                        <ListGroup.Item><p>username: </p>{account}</ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}


export default FollowedList