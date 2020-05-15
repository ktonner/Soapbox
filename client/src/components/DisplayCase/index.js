import React, { useEffect, useContext, useState } from 'react'
import API from "../../utils/postsAPI"
import Post from "../Post/index"
import PostContext from "../../utils/PostContext"

function DisplayCase () {

    const [postState, setPost] = useState({
        date: Date,
        author: "",
        title: "",
        text: "",
        tags: []
    })

    useEffect(() => {
        API.getPosts()
            .then(res => {
                console.log("This is the data", res)
                (res.data).map(post=>{
                    postState.date = post.date
                    postState.author = post.author
                    postState.title = post.title
                    postState.text = post.text
                    postState.tags = post.tags
                    setPostState({})
                    return(
                    <div>
                        <PostContext.Provider value = {postState}>
                            <Post/>
                        </PostContext.Provider>
                    </div>
                    )
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    if (!state.length) { return null };
    return state.map((post, index) => (
        <div key={index}>
            <h5>Title: {post.title}</h5>
            <p>Content: {post.text}</p>
            <p>#{post.tags}</p>
        </div>
    ));
}

export default DisplayCase