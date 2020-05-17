import React, { useEffect, useState } from "react"
import { getUser, getUserFromID } from "../../utils/accountsAPI"

function FollowedList () {

    const [following, setFollowing] = useState([])

    useEffect(()=>{
        loadList()
    },[])

    function loadList() {
        getUser().then(res => {
            console.log(res.data.following)
            setFollowing(res.data.following)
        })
        .catch(err => console.log(err));
    };



  return(
            <ul>
            {following.map((account, index) => {
                getUserFromID(account).then(res => {
                    console.log(res)
                    const followingUser = res.data.username
                    console.log(followingUser)
                    return (
                        
                        <li key={index}>{followingUser}</li>
        )
                    })})}
                    </ul>
        )
    }


export default FollowedList