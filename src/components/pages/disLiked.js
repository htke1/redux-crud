import React, { useEffect, useState } from 'react';
import {Heading} from '../Heading'
import { Message, Icon } from 'semantic-ui-react';
import GridBox from '../GridBox';
import Placeholder from '../util/placeholder';
import { useSelector } from 'react-redux';
function Disliked(){
    const [dislikedList, setDisList]=useState([]);

    const posts=useSelector((state)=> state.posts)
    useEffect(()=> {
        const temp= posts.filter((item, id)=>{
             return item.like===false;
         })
         setDisList(temp);
          },[posts])

return(
    <>
    {dislikedList.length?( <div>
        <Heading/>
        <h2>Disliked Post</h2>
        <h2>Disliked post</h2>
   {
      dislikedList.map((post)=>{
         return (<GridBox id={post.id} title={post.title} body={post.body}/>)
      })
   }
    </div>):((
        <div>
           <Heading/>
          <h2>Disliked Post</h2>
          <Placeholder/>
          <Message warning>
    <Message.Header>You must like a post.</Message.Header>
    <p>Click on  <Icon name = 'thumbs down'/> to show up here.</p>
  </Message>
        </div>
      )
      )}
      </>
   
)
}

export default Disliked;