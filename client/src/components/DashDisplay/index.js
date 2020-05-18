import React, { useEffect, useContext, useState, Component } from 'react'
import {getUser, getUserFromID} from "../../utils/accountsAPI"
import Post from "../Post/index"

class DashDisplay extends React.Component {

    state= {
        search: "",
        posts:[],
        filteredPosts: []
    };

    componentDidMount() {
       getUser().then(res=>{
           res.data.following.map(account=>{
               getUserFromID(account).then(res=>{
                   console.log(res.data.posts)
               })
           })
       })
    }

    render() {
        return (
            <div>
            <br/><br/>
            {this.state.filteredPosts.map((post, index) => {
                {console.log(this.state.posts)}
                {console.log(post)}
                {console.log(post.authorID)}
                return(
                <Post key={post.authorID} authorID={post.authorID} date={post.date} author={post.author} title={post.title} text={post.text} tags={post.tags} />
                )
            })}

            </div>
        )
    }
}

export default DashDisplay

