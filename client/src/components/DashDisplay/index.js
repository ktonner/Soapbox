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
        const postDataArray = []
        getUser().then(res => {
            res.data.following.map(account => {
                getUserFromID(account).then(res => {
                    res.data.posts.map(post => {
                        postsArray.push(post)
                    })
                    this.setState({ posts: postsArray })
                    this.state.posts.map(post=>{
                    API.getPost(post).then(res => {
                        postDataArray.push(res.data)
                    })
                    this.setState({postData: postDataArray})
                    console.log(this.state.postData)
                })
            })
        })})
    }
    


    render() {
        return (
            <div>
                
                {console.log(this.state.postData)}
                {this.state.postData.map(post => {
                        return (
                            <Post key={post.authorID} authorID={post.authorID} date={post.date} author={post.author} title={post.title} text={post.text} tags={post.tags} />
                        )
                    })
                }
            </div>
        )
    }
}

export default DashDisplay

