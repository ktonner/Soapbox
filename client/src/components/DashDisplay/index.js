import React, { useEffect, useContext, useState, Component } from 'react'
import { getUser, getUserFromID } from "../../utils/accountsAPI"
import Post from "../Post/index"
import API from "../../utils/postsAPI"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class DashDisplay extends React.Component {

    state = {
        posts: [],
        postData: [],
        loading: true
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
                    this.getPostData()
                })
            })
        }
        )
    }

    getPostData = () => {
        const postData = []
        return(
        this.state.posts.map(post => {
            API.getPost(post).then(res => {
                postData.push(res.data)
                this.setState({postData: postData})
            }
            )
        }))
    }

    render() {
        return (
                <div>
                    <div className="mx-auto">
                    {this.state.loading &&
                      <Loader
                      type="TailSpin"
                      color="#00BFFF"
                      height={50}
                      width={50}
                      timeout={2800} //3 secs
                   />
                    }
                    </div>
                    {this.state.postData.map(post=>(
                    <div>
                    <Post key={post.authorID} authorID={post.authorID} date={post.date} author={post.author} title={post.title} text={post.text} tags={post.tags} />
                    </div>
                    ))
                    }
                </div>
            )
    }
}

export default DashDisplay

