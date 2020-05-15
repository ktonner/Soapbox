import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from "../../utils/UserContext";
import API from "../../utils/postsAPI"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'


function Profile() {
    const [user, dispatch] = useContext(UserContext);
    const [deleted, setDeleted] = useState(false)

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [tags, setTags] = useState("")
    const [author, setAuthor] = useState(user.username)

    //const [post, setPost] = useState()
    // const [formObject, setFormObject] = useState({
    //     title: "",
    //     text: "",
    //     tags: [],
    //     author: ""
    // })
    const [showPost, setShowPost] = useState({})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let updateArray = []
    const handleShow = (id) => {
         updateArray = user.posts.filter(post => post._id ===id);
        console.log(updateArray)
        setShow(true);
        setShowPost(updateArray[0])
        // setTitle(showPost.title);
        // setText(showPost.text);
        // setTags(showPost.tags);
        
    }
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

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({ ...formObject, [name]: value })
    // };

    function handleFormSubmit(event, id) {
        console.log(title, text,tags)
        event.preventDefault();

        if (title && author) {
            API.updatePost({
                title: title,
                text: text,
                tags: tags,
                author: user.username
            }, id)
            .catch(err => console.log(err));
        }
    };
    // Delete post by id 
    function deletePost(id) {
        API.deletePost(id)
            .then(res => setDeleted(!deleted))
            .catch(err => console.log(err));
    }

    const displayPost = () => {
        //if (!user.posts.length) return null;
        return user.posts.map((post, index) => (
            
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">Title: {post.title}</h5>
                        <p className="card-subtitle mb-2 text-muted">#{post.tags}</p>
                        <p className="card-text">Content: {post.text}</p>
                        <button onClick={() => handleShow(post._id)} className="btn btn-primary">Update</button><span> </span>
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
                    {console.log(updateArray)}
                        <Modal show={show} onHide={() => setShow(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Update Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <Form.Group>
                                        <h2>Title</h2>
                                        <Form.Control value={title} size="lg" type="text" placeholder="Large text" name="title" onChange={(e)=> setTitle(e.target.value)} />
                                        <br />
                                    </Form.Group>

                                    <br />
                                    <Form.Group>
                                        <Form.Label>Post</Form.Label>
                                        <Form.Control value={text} as="textarea" rows="5" placeholder="Message" id="message" name="text" onChange={(e)=> setText(e.target.value)} />
                                    </Form.Group>
                                    <br />
                                    <Form.Group>
                                        <Form.Control value={tags} size="sm" type="text" placeholder="Tags" name="tags" onChange={(e)=> setTags(e.target.value)} />
                                    </Form.Group>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                    Cancel
                    </Button>
                                <Button variant="primary" onClick={(e) => handleFormSubmit(e, showPost._id)}>
                                    Update
                    </Button>
                            </Modal.Footer>
                        </Modal>
                    
                </div>
                <div className="col-md-6">
                    <h4>List of people you have followed</h4>

                </div>
            </div>

        </div>
    )

}

export default Profile