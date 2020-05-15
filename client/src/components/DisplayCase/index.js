import React, { useEffect, useContext, useState, Component } from 'react'
import API from "../../utils/postsAPI"
import Post from "../Post/index"
import PostContext from "../../utils/PostContext"

class DisplayCase extends React.Component {

    state= {
        posts:[]
    };

    componentDidMount() {
        API.getPosts()
            .then(res => {
                console.log("This is the data", res)
                this.setState({posts: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            this.state.posts.map((post, index) => {
                {console.log(this.state.posts)}
                {console.log(post)}
                {console.log(post.author)}
                return(
                <Post key={index} date={post.date} author={post.author} title={post.title} text={post.text} tags={post.tags} />
                )
            })
        )
    }
}

export default DisplayCase

