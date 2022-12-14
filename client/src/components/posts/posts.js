import React from 'react'
import Post from './post/post'
import { useSelector } from 'react-redux'
import useStyles from './styles.js' 
import { Grid, CircularProgress } from '@material-ui/core'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Posts = ({setCurrentID}) => {
  const classes = useStyles()
  const posts = useSelector((state)=>state.posts)

  // console.log(posts)
  return (
// if 0 length of the array of posts, then circular progress bar , else the posts. 
// ( ! * false = true ) posts.lenth being zero * 1 is a true value 
!posts.length ? <CircularProgress/> : (
  <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
    {/* () when returnig html in function, { when returning JS } and nothing while using setX to update states */}
{posts.map((post)=>(
<Grid item key={post._id} xs={12} sm={6} >
<Post post={post} setCurrentID={setCurrentID}/>
</Grid>
))}
  </Grid>
)
  )
}

export default Posts