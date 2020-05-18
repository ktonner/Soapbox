import React, { useEffect, useContext, useState, Component } from 'react'
import { getUser, getUserFromID } from "../../utils/accountsAPI"
import Post from "../Post/index"
import API from "../../utils/postsAPI"

class DashDisplay extends React.Component {

    state = {
        posts: []
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
        this.state.posts.map(post => {
            API.getPost(post).then(res=>{
            console.log(res)
            return (
                <Post key={res.authorID} authorID={res.authorID} date={res.date} author={res.author} title={res.title} text={res.text} tags={res.tags} />
              )})
        })
    }

    createPosts() {
        this.state.posts.map(post => {
        API.getPost(post).then(res=>{
        console.log(res)
        return (
            <Post key={res.authorID} authorID={res.authorID} date={res.date} author={res.author} title={res.title} text={res.text} tags={res.tags} />
          )})
    })

    }

    render() {

        return (
            <div>
           
            </div>
        )
    }
}

export default DashDisplay

