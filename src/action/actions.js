import * as api from '../api/api.js'
import { DISLIKED } from './actionTypes.js';
import { LIKED } from './actionTypes.js';
import { CREATE, UPDATE, DELETE} from './actionTypes'



export const createPost = (post) => (dispatch)=>{
    try{
        
        dispatch({
            type: CREATE,
            payload: post
        })
    }
    catch(err){
        console.log(err.message)
    }
}

export const updatePost = (id,post) => async(dispatch)=>{
    try{
        dispatch({
            type: UPDATE,
            payload: post, id
        })
    }
    catch(err){
        console.log(err.message);
    }
}

export const deletePost = (id) =>async (dispatch)=>{
    try{
 await api.deletePost(id);
dispatch({
    type: DELETE,
    payload: id
})
    }
    catch(err){console.log(err.message)}
    
}

export const likedPost = (id,status) => (dispatch)=>{
    try{
        console.log('in thunk'+id)
        dispatch({
            type: LIKED,
            payload: id,status
        })
    }
    catch(err){console.log(err.message)}
}

export const dislikePost = (id,status) => (dispatch)=>{
    try{
        dispatch({
            type: DISLIKED,
            payload: id,status
        })
    }
    catch(err){console.log(err.message)}
}