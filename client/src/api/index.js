import axios from 'axios';

const url = 'http://localhost:5000/posts';

// this below is an axios get request to fetch data from the body at local host 5000
export const fetchPosts = ()=> axios.get(url)

// this below is an axios get request to post data from to the body at the frontend
export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)

// no deletePost since, no post is being passed 
export const deletePost = (id) => axios.delete(`${url}/${id}`); 

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)