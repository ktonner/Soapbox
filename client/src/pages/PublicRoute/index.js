import React from 'react'
import { urlencoded } from 'body-parser'

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute() {

    return (
       
        <div className="container-fluid" style={{backgroundImage: "url('https://i.pinimg.com/originals/c2/9c/e3/c29ce3e37cb5c859cd5dc451777fed62.jpg')"}}>
           
                
                <div style={{paddingBottom: "50%", paddingLeft: "30%"}}>
                    <h3 style={{paddingTop: "200px"}}>Welcome to our Social Media Page!</h3>
                    <h5>This is the place where you can sign up to be a member to see all posts from all of our users, you can search for posts by hashtag#, create your own post, update or delete your posts. One of our special features is that you can follow other users to see their posts.</h5>
                </div>
                
            
        </div>
    
    )
}


export default PublicRoute