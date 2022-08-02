import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String, 
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number, 
        default : 0
    }, 
    createdAt : {
        type : Date,
        default : new Date()
    }
})

// exporting the schema 

// post message is the collection of data in accordance to the post Schema
// data has roots in mongo db
var PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage