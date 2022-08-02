import { FETCH_ALL, UPDATE, CREATE, DELETE, LIKE} from '../constants/actionTypes.js'


export default (posts = [], action) =>{
    switch(action.type){
        case FETCH_ALL :
            return action.payload
        case CREATE:
            // code succeeds the code at form which runs a dispatch wrt creat posts wrt data obtained from forms as STATE data
            return [...posts, action.payload]
            case UPDATE:
            case LIKE :
                // code succeeds the code at form which runs a dispatch wrt creat posts wrt data obtained from forms as STATE data
                return posts.map((post)=> post._id === action.payload._id ? action.payload : post)
        case DELETE:
            return posts.filter((post)=> post._id !== action.payload)

                default:
            return posts;
    }
}