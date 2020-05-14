import axios from "axios";

// export default {
//   // Gets current user
//   getUser: function() {
//     return axios.get("/api/users/user/");
//   },
//   // Gets the posts with the given id
//   handleFollow: function() {
//     return axios.put("/api/users/follow/")
//     }
//   }
    export const handleFollow = (id) => {
      return axios.put("/api/users/follow/" + id)
      return axios.put("api/users/follower/" + id)
      }