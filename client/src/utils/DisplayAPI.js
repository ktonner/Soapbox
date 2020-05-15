import React, { useEffect, useContext, useState } from 'react'
import API from "../utils/postsAPI"
import Post from "../components/Post/index"
import PostContext from "../utils/PostContext"


function DisplayFunc(){
let posts = []

const [postState, setPost] = useState({
    date: Date,
    author: "",
    title: "",
    text: "",
    tags: []
})


API.getPosts()
    .then(res => {
        console.log("This is the data", res)
        posts = res.data
    })
    .catch(err => {
        console.log(err)
    })

const postsMap = posts.map(post => {
    console.log("This is the post", post)
    postState.date = post.date
    postState.author = post.author
    postState.title = post.title
    postState.text = post.text
    postState.tags = post.tags
    setPost({})
    return (
        <div>
            <PostContext.Provider value={postState}>
                <Post />
            </PostContext.Provider>
        </div>
    )
})
}

export default DisplayFunc