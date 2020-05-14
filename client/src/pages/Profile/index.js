import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/postsAPI"
/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function Profile() {
    const [user, dispatch] = useContext(UserContext);
    const [deleted, setDeleted] = useState(false)
    //const [post, setPost] = useState()
    const [formObject, setFormObject] = useState({
        title: "",
        text: "",
        tags: ""
      })
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

	}, [deleted]);
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

      function handleUpdate(event) {
        event.preventDefault();
        if (formObject.title && formObject.text && formObject.tags) {
          API.savePost({
            title: formObject.title,
            text: formObject.text,
            tags: formObject.tags
          })
            .then(() => setFormObject({
              title: "",
              text: "",
              tags: ""
            }))
            //.then(() => Window.reload()
            .catch(err => console.log(err));
        }
      };
    function deletePost(id) {
        API.deletePost(id)
          .then(res => setDeleted(!deleted))
          .catch(err => console.log(err));
    }
    
    
    const displayPost = () => {
        console.log("Should log out the posts" ,user)
        //if (!user.posts.length) return null;
        return user.posts.map((post, index) => (

            <div key={index} className="card">
                <div className="card-body">
                    <h5 onChange={handleInputChange} className="card-title">Title: {post.title}</h5>
                    <p onChange={handleInputChange} className="card-subtitle mb-2 text-muted">#{post.tags}</p>
                    <p onChange={handleInputChange} className="card-text">Content: {post.text}</p>
                    <button onClick={handleUpdate} className="btn btn-primary">Update</button><span> </span>
                    <button onClick={() => deletePost(post._id)} className="btn btn-danger">Delete</button>
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