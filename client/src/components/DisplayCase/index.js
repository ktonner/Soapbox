import React, { useEffect, useContext, useState } from 'react'
import API from "../../utils/postsAPI"
import Post from "../Post/index"

function DisplayCase() {

    // useEffect(() => {
    //     API.getPosts().then(
    //         (res) => {
    //             console.log(res.json)
    const [state, setPosts] = useState({
        title: "",
        text: "",
        tags: "",
        posts: []
    })


    useEffect(() => {
        API.getPosts()
            .then(res => {
                console.log("This is the data", res)
                setPosts({ posts: res.data })
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