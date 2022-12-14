import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png'
import Posts from './components/posts/posts.js';
import Form from './components/form/Form.js';
import useStyles from './styles.js'
import { useDispatch } from 'react-redux';
import {getPosts } from './actions/posts.js'


// NOTE : For edit, ID is required which needs to be passed as props , so the only way is to find element, parent to both and do it. 

const App = () => {
const [ currentID, setCurrentID] = useState(null)
  const classes = useStyles()
const dispatch = useDispatch()

useEffect(()=>{
  // dispatch fires get posts , takes it to post actions where data is given to dispatch, which takes it to post reducers, where action is defined
dispatch(getPosts())
},[currentID, dispatch])

  return (
    <div>
      
<Container maxWidth="lg">
<AppBar className={classes.appBar} position="static" color="inherit">
  {/* You have to use typography along with vairiant to use h2 or h1 */}
<Typography className={classes.heading} variant="h2" align="center">
Memories
</Typography>

<img src={memories} className={classes.image} height="60"alt="memories" />

</AppBar>

<Grow in>
  <Container>
    <Grid container className={classes.Maincontainer} justify="space-between" alignItems="stretch" spacing={3}>

<Grid item xs={12} sm={7}>
<Posts setCurrentID={setCurrentID} />
</Grid>

<Grid item xs={12} sm={4}>
  <Form currentID={currentID}  setCurrentID={setCurrentID} />
</Grid>

    </Grid>
  </Container>
</Grow>


</Container>


    </div>
  )
}


export default App