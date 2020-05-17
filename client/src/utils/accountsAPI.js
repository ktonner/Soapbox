import axios from "axios";

    export const handleFollow = (id) => {
      return axios.put("/api/users/follow/" + id)
      }
      
    export const newFollower = (id) => {
      return axios.put("/api/users/follower/" + id)
    }

    //get current user
    export const getUser = () => {
      return axios.get("/api/users/user/");
    }

    export const getUserFromID = (id) => {
      return axios.get("/api/users/" + id)
    }
