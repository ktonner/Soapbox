import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the posts with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  //Update post by id
  updatePost: function(updateData, id) {
    return axios.put("api/posts/" + id, updateData);
  },
  // Saves a post to the database
  savePost: function(postData, id) {
    console.log(postData)
    return axios.post("/api/posts/" + id, postData);
  },

  //get user for post author
  getUser: function(){
    return axios.get("/auth/user")
  }
};