import React, { useEffect } from 'react'
import useStyles from './styles.js'
// import { TextField, Button, Typography } from '@mui/material';
import { Container, AppBar, Typography, Grow, Grid, TextField, Paper, Button } from '@material-ui/core';
import FileBase from 'react-file-base64';
// to recieve data, we have to use dispatch which acts as the link between redux defined actions and data from the forms. 
import { useDispatch } from 'react-redux'
import {createPosts, updatePost} from '../../actions/posts'
import  {useSelector} from 'react-redux';

const Form = ({currentID, setCurrentID}) => {

  // state is the combined larger entity and post is an array from it which we require. 
  // if current ID is a true value, then find that one post where post ID is current ID 
  const post = useSelector((state)=> currentID ? state.posts.find((p) => p._id === currentID ) : null )

  const [ postData, setPostData] = React.useState({
    creator : '',
    title : '',
    message : '',
    tags : '',
    selectedFile : ''
  })

  const classes = useStyles()

  const dispatch = useDispatch()

  useEffect(()=>{
    // if post is not a null value, that means some post is being edited wrt Currentid, thus the values in form should be placed equal to the same. 
if(post) setPostData(post)
  },[post])

  const handleSubmit = (e) => {
    // first, prevent the refresh
    e.preventDefault()

    // if current ID has been received, then it means, the user wishes to update the post. 
    //updatePOST is based on a function created at index/api
    if(currentID){
    dispatch(updatePost(currentID,  postData))
    clear()
    } else {
    // the createpost function is defined in the actions file, where a post request is made wrt postData
    dispatch(createPosts(postData))
    clear()
    }

  }

  const clear = ()=>{
    // this would make ID null, thus post null, thus the empty setPOST will be obtained and not one filled with post Data
setCurrentID(null)
setPostData({
  creator : '',
  title : '',
  message : '',
  tags : '',
  selectedFile : ''
  })
  }

  // console.log(postData.tags)

  return (
<div>
  <>
    <Paper className={classes.Paper}>

    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    <Typography className={classes.typography} variant="h6">
    { currentID ? 'Edit this memory' : 'Create a memory' } 
    </Typography>
    <TextField name="creator" variant="outlined" label="Creator"  fullWidth value={postData.creator}  onChange={(e)=> setPostData({...postData,creator : e.target.value})}/>
    <TextField name="title" variant="outlined" label="Title"  fullWidth  value={postData.title}  onChange={(e)=> setPostData({...postData,title : e.target.value})}/>
    <TextField name="message" variant="outlined" label="Message"  fullWidth  value={postData.message}  onChange={(e)=> setPostData({...postData,message : e.target.value})}/>
    <TextField name="tags" variant="outlined" label="Tags"  fullWidth  value={postData.tags}  onChange={(e)=> setPostData({...postData,tags : e.target.value.split(',')})}/>
    <div className={classes.fileInput}>
<FileBase
type="file"
className={classes.fileInput}
multiple={false}
onDone={({base64})=>setPostData({...postData, selectedFile: base64 })}
/>
    </div>
    <Button className={classes.buttonSubmit} style={{marginBottom:'10px'}} variant="contained" color="primary" type="submit" size="large" fullWidth> Submit </Button>
    <Button variant="contained" color="secondary" size="small" onClick={clear} style={{marginBottom:'10px'}} fullWidth> Clear </Button>

    </form>

    </Paper> 
    </>
    </div>
    
  )
}

export default Form