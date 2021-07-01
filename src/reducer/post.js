

import { FETCH_ALL, CREATE, UPDATE, DELETE,LIKED ,DISLIKED } from '../action/actionTypes';
//eslint-disable-next-line
export default  (posts=[], action) => {
    switch(action.type)
    {
    case FETCH_ALL: 
    return action.payload;

    case LIKED:
        
        return posts.map((post)=>{
        if(post.id===action.payload)
        {
            return {...post, like: true}}
        return post;
})




        case DISLIKED: 
        return posts.map((post)=>{
        if(post.id===action.payload)
        {
            return {...post, like: false}}
        return post;
})
    
    case CREATE:
        return ([...posts, action.payload])
    case UPDATE:
        return posts.map((post) => (post.id === action.payload.id ? action.payload : post));
    case DELETE:
        return posts.filter((post) => post.id !== action.payload);
    default: 
    return posts;    

}
};