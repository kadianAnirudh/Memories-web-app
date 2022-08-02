import PostMessage from "../models/postMessage.js"
import express from "express";
import mongoose from 'mongoose';

// since finding data is time consuming and we need the data to pass first, the given code is async and awaits the arrival of postmessage
export const getPosts = async (req,res)=> {
try{

const postMessages = await PostMessage.find()
console.log(postMessages)
res.status(200).json(postMessages)

} catch(error){
res.status(404).json({message: error.message})
}

}


// sending DATA
export const createPost = async (req,res) => 
{
    const post = req.body
    // fetching data from post message, as received from the body
    const newPost = new PostMessage(post)

try {
await newPost.save()
res.status(201).json(newPost);

} catch (error){
res.status(409).json({message : error.message})
}
}

export const updatePost = async (req,res) => {
    const { id: _id } = req.params
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).send('No post with that ID');

    
// ID followed by what is to be passed as an update
    const updatedPost = await PostMessage.findByIdAndUpdate({...post, _id}, post, { new : true})

    // this is what is received when api request is made to this address. 
    res.json(updatedPost)
} 

export const deletePost = async (req,res)=>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send('No post with that ID');

     await PostMessage.findByIdAndRemove(id);

     res.json({message : "post deleted successfully"})

}


export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send('No post with that ID');

    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount : post.likeCount + 1 }, { new : true })

    res.json(updatedPost)
}