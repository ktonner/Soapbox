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
                    this.getPostData()
                })
            })
        }
        )
    }

    getPostData = () => {
        const postData = []
        console.log(this.state.posts)
        return(
        this.state.posts.map(post => {
            API.getPost(post).then(res => {
                console.log(res.data)
                postData.push(res.data)
                this.setState({postData: postData})
            }
            )
        }))
    }

    render() {
        return (
                <div>
                    {this.state.postData.map(post=>(
                    <div>
                    <Post key={post.authorID} authorID={post.authorID} date={post.date} author={post.author} title={post.title} text={post.text} tags={post.tags} />
                    </div>
                    ))}
                </div>
            )
    }
}

export default DashDisplay

