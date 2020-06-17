import React, { useEffect, useState } from "react"
import { getUser, getUserFromID } from "../../utils/accountsAPI"
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import UnfollowBtn from '../UnfollowBtn'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

function FollowedList() {

    const [followings, setFollowing] = useState([])
    const {isUpdated, setIsUpdated} = useState(false)
    const {loading, setLoading} = useState(true)

    useEffect(() => {
        loadList()
    }, [])

    function loadList() {
        getUser().then(res => {
            console.log(res.data.following)
            res.data.following.map((account) => {
                getUserFromID(account)
                .then(res => {
                    setFollowing(followings=>[...followings, {username: res.data.username, id: account}])
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
                <div align="center">
                      <Loader
                      type="TailSpin"
                      color="#00BFFF"
                      height={50}
                      width={50}
                      timeout={3200} //3 secs
                   />
                   </div>
                   <br/>
            <ListGroup>
                {followings.map((account) => {
                    console.log(account)
                    return (
                        <ListGroup.Item key={account.id}>Username: {account.username}<UnfollowBtn id={account.id}/></ListGroup.Item>
                    )
                })}
            </ListGroup>
        </div>
    )
}


export default FollowedList