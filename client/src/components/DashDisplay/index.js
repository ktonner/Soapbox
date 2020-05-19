import React, { useEffect, useContext, useState, Component } from 'react'
import { getUser, getUserFromID } from "../../utils/accountsAPI"
import Post from "../Post/index"
import API from "../../utils/postsAPI"

class DashDisplay extends React.Component {

    state = {
        posts: [],
        postData: []
    };

    componentDidMount() {
        const postsArray = []
        getUser().then(res => {
            res.data.following.map(account => {
                getUserFromID(account).then(res => {
                    res.data.posts.map(post => {
                        postsArray.push(post)
                    })
                    this.setState({ posts: postsArray })
                    console.log(this.state.posts)
                })
            })
        })
    }

    getPostData = () => {
        console.log(this.state.posts)
        return(
        this.state.posts.map(post => {
            API.getPost(post).then(res => {
                console.log(res.data)
                return (
                    <div>
                        <Post key={res.data.authorID} authorID={res.data.authorID} date={res.data.date} author={res.data.author} title={res.data.title} text={res.data.text} tags={res.data.tags} />
                        <h3>test</h3>
                    </div>
                )
            }
            )
        }))
    }

    render() {
        return (
            <div>
                {this.getPostData()}
            </div>

        )
    }
}

export default DashDisplay

