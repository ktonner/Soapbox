import React, { useEffect, useContext, useState, Component } from 'react'
import {getUser, getUserFromID} from "../../utils/accountsAPI"
import Post from "../Post/index"
const API = require("../../utils/postsAPI")

class DashDisplay extends React.Component {

    state= {
        posts: []
    };

    componentDidMount() {
        const postsArray=[]
       getUser().then(res=>{
           res.data.following.map(account=>{
               getUserFromID(account).then(res=>{
                   res.data.posts.map(post=>{
                       postsArray.push(post)
                   })
                   this.setState({posts: postsArray})
                   console.log(this.state.posts)
                   
               })
           })
       })
    }

    createPosts(){
        this.state.posts.map(post=>{
            API.getPost(post)
            console.log(post)
            return(
                <Post key={post.authorID} authorID={post.authorID} date={post.date} author={post.author} title={post.title} text={post.text} tags={post.tags} />
                )
        })
    }

    render() {
        
        return (
            <div>
                {this.createPosts()}
            </div>
        )
    }
}

export default DashDisplay

