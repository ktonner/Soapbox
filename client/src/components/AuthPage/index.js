import React from "react";
import image from "./Wo.jpg";
function AuthPage() {
    return (
       <div style={{backgroundImage: `url(${image})`}}>
         <div style={{paddingBottom: "50%", paddingLeft: "20px", paddingRight: "60%"}}>
                    <h3 style={{paddingTop: "50px"}}>Welcome to our Social Media Page!</h3>
                    <h5>This is the place where you can sign up to be a member to see all posts from all of our users, you can search for posts by hashtag#, create your own post, update or delete your posts. One of our special features is that you can follow other users to see their posts. Let's start by logging in or register a new user on your top right corner!💖</h5>
                </div>
        </div>
    )
}
export default AuthPage;