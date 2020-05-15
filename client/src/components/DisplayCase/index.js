import React, { useEffect, useContext, useState, Component } from 'react'
import API from "../../utils/postsAPI"
import Post from "../Post/index"
import PostContext from "../../utils/PostContext"

class DisplayCase extends React.Component {

    posts = []

    componentWillMount() {
        API.getPosts()
            .then(res => {
                console.log("This is the data", res)
                this.posts.push(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            (this.posts).map((post) => {
                {console.log(this.posts)}
                {console.log(post)}
                return(
                <Post date={post.date} author={post.author} title={post.title} text={post.text} tags={post.tags} />
                )
            })
        )
    }
}

export default DisplayCase

