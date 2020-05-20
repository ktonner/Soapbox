import React from 'react'
import { urlencoded } from 'body-parser'


/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute() {

    return (
       
        <div className="container-fluid">
           
                <img src="./soapbox.png"/>
                <div style={{paddingBottom: "50%", paddingLeft: "30%"}}>
                    <h3 style={{paddingTop: "200px"}}>Welcome to Soapbox!</h3>
                    <h5>This is the place where you can sign up to be a member to see all posts from all of our users, you can search for posts by hashtag#, create your own post, update or delete your posts. One of our special features is that you can follow other users to see their posts. Let's start by logging in or register a new user on your top right corner!💖</h5>
                </div>
                 
            
        </div>
    
    )
}


export default PublicRoute