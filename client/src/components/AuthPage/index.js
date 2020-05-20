import React from "react";
import image from "../../pages/PublicRoute/soapbox.png";
import Col from 'react-bootstrap/Col'

function AuthPage() {
    return (
        <Col xs={6} className="mx-auto">
     
             <img src={image} style={{position:"relative", left:"-20%"}} className="mt-2"/>
                    <h3 style={{paddingTop: "50px", color: "white"}}>Welcome to Soapbox!</h3>
                    <h5 style={{color: "white"}}>This is the place where you can sign up to be a member to see all posts from all of our users, you can search for posts by hashtag#, create your own post, update or delete your posts. One of our special features is that you can follow other users to see their posts. Let's start by logging in or register a new user on your top right corner!💖</h5>
           
                </Col>
    )
}
export default AuthPage;