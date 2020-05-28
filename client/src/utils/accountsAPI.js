import axios from "axios";

    export const handleFollow = (id) => {
      return axios.put("/api/users/follow/" + id)
      }

      export const handleUnfollow = (id) => {
        return axios.delete("/api/user/follow/" + id)
      }
      
    export const newFollower = (id) => {
      return axios.put("/api/users/follower/" + id)
    }

          
    export const removeFollower = (id) => {
      return axios.delete("/api/users/follower/" + id)
    }

    //get current user
    export const getUser = () => {
      return axios.get("/api/users/user/");
    }


    export const getUserFromID = (id) => {
      return axios.get("/api/users/" + id)
    }

  export const getFollowingUsers = () => {
    return axios.get("/api/users")
  }


