import React, { useEffect, useContext,useState } from 'react'
//import { UserContext } from "../../utils/UserContext";
import API from "../../utils/postsAPI"

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function Profile() {
    //const [user, dispatch] = useContext(UserContext);
    
    const [state, setPosts] = useState({
        title: "",
        text: "",
        tags: "",
        posts: []
    })
	
    useEffect(() => {
        API.getPosts()
            .then(res=> {
                console.log("This is the data", res)
                setPosts({posts: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    },[]);
    const displayPost = (posts) => {
        if(!posts.length) return null;
        return posts.map((post,index) => (
        
            <div key={index}>
                <h5>Title: {post.title}</h5>
                <p>Content: {post.text}</p>
                <p>#{post.tags}</p>
            </div>
        
        ));
    }
	return (
		<div className="container">
			<div className="row">
                <div className="col-md-6">
                    <h4>List of your posts</h4>
                    <br/>
                    {displayPost(state.posts)}
                </div>
                <div className="col-md-6">
                    <h4>List of people you have followed</h4>
                    
                </div>
            </div>
		
		</div>
	)

}

export default Profile