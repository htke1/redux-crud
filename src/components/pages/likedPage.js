import React, {  useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {Heading} from '../Heading'
import GridBox from '../GridBox';
import Placeholder from '../util/placeholder';
import {Message,Icon} from 'semantic-ui-react'
function Liked(){
    
  const posts=useSelector((state)=> state.posts)
    const [likedList, setList]=useState([]);
    console.log(posts)
    useEffect(()=> {
       const temp= posts.filter((item, id)=>{
         if(item.like!=null){
            return item.like===true;}
        })
        setList(temp);
         },[posts])
return(
  <>
  {likedList.length?( <div>
    <Heading/>
    <h2>Liked Post</h2>
    
{
  likedList.map((post)=>{
  return ( <GridBox id={post.id} title={post.title} body={post.body}/>)
  })
}
</div>)
:
(
  <div>
     <Heading/>
    <h2>Liked Post</h2>
    <Placeholder/>
    <Message warning>
    <Message.Header>You must like a post.</Message.Header>
    <p>Click on  <Icon name = 'thumbs up'/> to show up here.</p>
  </Message>
  </div>
)

}
</>
   
)
}

export default Liked;