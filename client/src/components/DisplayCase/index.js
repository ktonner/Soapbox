import React, { useEffect, useContext, useState, Component } from 'react'
import API from "../../utils/postsAPI"
import Post from "../Post/index"
import PostContext from "../../utils/PostContext"

class DisplayCase extends React.Component {

    state= {
        search: "",
        posts:[],
        filteredPosts: []
    };

    componentDidMount() {
        API.getPosts()
            .then(res => {
                console.log("This is the data", res)
                this.setState({posts: res.data, filteredPosts: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleInput = (event) => {
        this.setState({ search: event.target.value });
        
        const filtered = this.state.posts.filter((post) => {
            
           return (post.tags.join("").indexOf(event.target.value.toLowerCase()) !== -1);
             
        })

        this.setState({ filteredPosts: filtered })
    }

    render() {
        return (
            <div style={{backgroundColor: "lightblue"}}>
            <br/>
            <h4 style={{textAlign: "center"}}>Search posts by hashtag#</h4>
            <input type="text" placeholder="Enter # name" onChange={this.handleInput} style={{border: "2px solid rgb(57, 137, 187)", fontSize: "20px", marginLeft: "40%"}} />
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

export default DisplayCase

