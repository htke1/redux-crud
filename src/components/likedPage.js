import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from "../context/GlobalState";
import {Heading} from './Heading'
import { Link } from "react-router-dom";
import { Card, Button, Image , Icon} from "semantic-ui-react"
function Liked(){
    const { users , removeUser, likedPost,disLikedPost} = useContext(GlobalContext);
    const [likedList, setList]=useState([]);
    useEffect(()=> {
       const temp= users.filter((item, id)=>{
            return item.like===true;
        })
        setList(temp);
         },[users])
return(
    <div>
        <Heading/>
        <h2>Liked Post</h2>
   {
      likedList.map((user)=>{
      return (  <Card key={user.id}>
        <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Description>
        {user.caption}
           </Card.Description>
              
                <Link to={`/edit/${user.id}`} color="warning" ><Button  color="blue">Edit</Button></Link>
                <Button onClick={() => removeUser(user.id)} color="black">Delete</Button>
                
               
            </Card.Content>
            <Card.Content extra>
          <div className='ui two buttons'>
            <button  className="ui  yellow button" id="likeBtn" onClick={()=>likedPost(user.id)}>
            <Icon name='thumbs up outline'/>
            </button>
            <button  className="ui  red button" id="dislikeBtn" onClick={()=>disLikedPost(user.id)}>
           <Icon name = 'thumbs down'/>
            </button>
            
          </div>
        </Card.Content>
            </Card>)
      })
   }
    </div>
)
}

export default Liked;