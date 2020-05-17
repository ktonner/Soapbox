import React, { Component } from "react"
import { getUser, getUserFromID } from "../../utils/accountsAPI"

class FollowedList extends React.Component {

    state = {
        following: []
    }

    componentWillMount() {
        getUser().then(res => {
            console.log(res.data.following)
            const following = res.data.following
            this.setState({ following: following })

        })
    }

    createList() {
        this.state.following.map((account, index) => {
            getUserFromID(account).then(res => {
                console.log(res)
                const followingUser = res.data.username
                console.log(followingUser)
                return (
                    <p key={index}>{followingUser}</p>
                )
            })
        }
        )
    }

    render() {
        return (
            <div>
                {this.createList()}
            </div>
        )
    }
}

export default FollowedList