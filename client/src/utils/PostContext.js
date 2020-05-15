import React from "react";

const PostContext = React.createContext({
    date: Date,
    author: "",
    title: "",
    text: "",
    tags: []
});

export default PostContext