import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from "../../utils/UserContext";

/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function Profile() {
    const [user, dispatch] = useContext(UserContext);
    console.log("Log out user", user)
    
    useEffect(() => {
		fetch('api/users/user', {
			credentials: 'include'
		})
			.then((res) => {
				console.log(`response to authenticate ${res}`);
				return res.json(res)

			})
			.then(data => {
				console.log(data);
				dispatch({
					type: "GET_USER",
					payload: data
				})

			})
			.catch((err) => {
				console.log('Error fetching authorized user.');
			});

	}, []);

    
    const displayPost = () => {
        console.log("Should log out the posts" ,user)
        //if (!user.posts.length) return null;
        return user.posts.map((post, index) => (

            <div key={index} className="card">
                <div className="card-body">
                    <h5 className="card-title">Title: {post.title}</h5>
                    <p className="card-subtitle mb-2 text-muted">#{post.tags}</p>
                    <p className="card-text">Content: {post.text}</p>
                    <button className="btn btn-primary">Update</button><span> </span>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>

        ));
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4>List of your posts</h4>
                    <br />
                    {displayPost()}
                </div>
                <div className="col-md-6">
                    <h4>List of people you have followed</h4>

                </div>
            </div>

        </div>
    )

}

export default Profile