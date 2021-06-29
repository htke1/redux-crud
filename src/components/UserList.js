import React, { useContext , useState} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import './styles.css'
import { Card, Button, Image , Icon} from "semantic-ui-react"

export const UserList = () => {
  const { users, removeUser, likedPost,disLikedPost } = useContext(GlobalContext);
  const [showData, setData] = useState(users);
  const [searchItem, setSearchItem] = useState('');


  function handleChange(e){
    console.log("lello");
    setSearchItem(e.target.value);

    let temp=users.filter((user)=>{
        if(searchItem===''){
            return user
        }
        else if(user.name.toLowerCase().includes(searchItem.toLowerCase())){
            return user
        }
    })
   setData(temp);
   
}

function handleLikeClick(id){
  
  likedPost(id);

}
  return (
    <>

      {users.length > 0 ? (
          searchItem.length===0? (
        <>
         <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>

       {users.map(user => (
           <Card key={user.id}>
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
            <button  className="ui  yellow button" id="likeBtn" onClick={()=>handleLikeClick(user.id)}>
            <Icon name='thumbs up outline'/>
            </button>
            <button  className="ui  red button" id="dislikeBtn" onClick={()=>disLikedPost(user.id)}>
           <Icon name = 'thumbs down'/>
            </button>
            
          </div>
        </Card.Content>
            </Card>
          ))}
          </>
          )
          :
        (  <>
            <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>
          {
            showData.map(user => (
              <Card key={user.id}>
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
                  <button  className="ui  yellow button" id="likeBtn" onClick={()=>handleLikeClick(user.id)}>
                  <Icon name='thumbs up outline'/>
                  </button>
                  <button  className="ui  red button" id="dislikeBtn" onClick={()=>disLikedPost(user.id)}>
                 <Icon name = 'thumbs down'/>
                  </button>
                  
                </div>
              </Card.Content>
                  </Card>
            )
          )}
        </>
      )) : (
          <h4 className="text-center">No Users</h4>
        )}
    </>
  )
}
