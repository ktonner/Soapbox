import React, { useEffect, useState } from "react"
import { getUser, getUserFromID } from "../../utils/accountsAPI"
import ListGroup from 'react-bootstrap/ListGroup'

function FollowedList() {

    const [followings, setFollowing] = useState([])

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        const array = []
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
            <ListGroup>
                {followings.map(account => {
                    return (
                        <ListGroup.Item>{account}</ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}


export default FollowedList