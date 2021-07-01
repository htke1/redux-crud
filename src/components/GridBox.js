import { Card, Button, Grid , Icon, GridColumn} from "semantic-ui-react"
import React from "react"
import {Link} from 'react-router-dom'
import {deletePost, dislikePost} from '../action/actions'
import {useDispatch} from 'react-redux';
import {likedPost} from '../action/actions'
function GridBox(props){
  const dispatch=useDispatch();

  function handleClick(e,id){
    if(e.target.name==="like"){
      
      dispatch(likedPost(id,true))
    }
    else{
      dispatch(dislikePost(id,false));
    }
    console.log(e.target.name+" is hitted with id="+id)
  }
    return(

        
        <Card key={props.id}>
     <Card.Content>
     <Card.Header>{props.title}</Card.Header>
     <Card.Description> {props.body} </Card.Description>
     <Link to={`/edit/${props.id}`} color="warning" ><Button  color="blue">Edit</Button></Link>
     <Button onClick={() => dispatch(deletePost(props.id))} color="black">Delete</Button> 
         </Card.Content>
         <Card.Content extra>
       <div className='ui two buttons'>
         <button onClick={(e)=>handleClick(e,props.id)} className="ui  yellow button" name="like"id="likeBtn" >
         <Icon name='thumbs up outline'/>
         </button>
         <button  onClick={(e)=>handleClick(e,props.id)} className="ui  red button" name="dislike" id="dislikeBtn">
        <Icon name = 'thumbs down'/>
         </button>
         
       </div>
     </Card.Content>
         </Card>
      )
}

export default GridBox;