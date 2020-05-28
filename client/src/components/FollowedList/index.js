import React, { useEffect, useState } from "react"
import { getUser, getUserFromID } from "../../utils/accountsAPI"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import UnfollowBtn from '../UnfollowBtn'

function FollowedList() {

    const [followings, setFollowing] = useState([])
    const {isUpdated, setIsUpdated} = useState(false)

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        getUser().then(res => {
            console.log(res.data.following)
            const fID = res.data.following
            res.data.following.map((account) => {
                getUserFromID(account)
                .then(res => {
                    setFollowing(followings=>[...followings, {username: res.data.username, id: fID}])
                })
            })
            //setIsUpdated(true)
            console.log(followings)
        })
            .catch(err => console.log(err));
    };



    return (
        <div>
            <br/>
            <ListGroup>
                {followings.map((account) => {
                    return (
                        <ListGroup.Item key={account.id}>Username: {account.username}<UnfollowBtn/></ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}


export default FollowedList