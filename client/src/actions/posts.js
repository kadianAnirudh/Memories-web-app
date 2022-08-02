import * as api from '../api'
import { FETCH_ALL, UPDATE, CREATE, DELETE} from '../constants/actionTypes.js'
// ACTION CREATORS 

// A. THIS CODE SUCCEDS THE CODE FOR GET AXIOS REQUEST
export const getPosts = () =>  async(dispatch) => {
try {
    // this data is the data of POSTS , which is arriving from the api , which works on a get request, from the req.body which has all post data. 
const { data } = await api.fetchPosts();
dispatch({type: FETCH_ALL, payload: data});


} catch (error) {
 console.log(error.message);
}
}

// B. THIS DATA SUCCEEDS THE CODE OF AXIOS, WHICH IS A POST REQUEST. 
export const createPosts = (post) => async (dispatch) => {
    try{
        // post requests are run wrt elements, since there is a single element involved which is being posted. 
const { data } = await api.createPost(post)

// this CREATE is defined at redux , and dispacth which acts as a link, ensures the flow of code
dispatch({type : CREATE, payload : data});
    } catch(error) {
console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
        // this data is actually an updated JSON which is being received via tha axios and router
const { data } = await api.updatePost(id, post)

// dispatch is being used right from the reducer
dispatch({type : UPDATE, payload : data})
    } catch (error) {
console.log(error)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
await api.deletePost(id)

dispatch({type: DELETE, payload: id})
    } catch(error){
console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        // this data is actually an updated JSON which is being received via tha axios and router
        const { data } = await api.likePost(id)

        // dispatch is being used right from the reducer
        dispatch({type : UPDATE, payload : data})
    } catch(error){
        console.log(error)
            }
}