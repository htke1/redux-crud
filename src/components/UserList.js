import React, { useContext , useState} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

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
  return (
    <ListGroup className="mt-4">

      {users.length > 0 ? (
          searchItem.length===0? (
        <>
         <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>

       {users.map(user => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <i>{user.caption}</i>
              <p>{user.like}</p>
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
               
                <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
               <Button onClick={()=>likedPost(user.id)}>Like</Button>
               <Button onClick={()=>disLikedPost(user.id)} color="danger">disLike</Button>
                {console.log(user)}
              </div>
            </ListGroupItem>
          ))}
          </>
          )
          :
        (  <>
            <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>
          {
            showData.map(user => (
              <ListGroupItem className="d-flex" key={user.id}>
                <strong>{user.name}</strong>
                <i>{user.caption}</i>
                <p>{user.like}</p>
                <div className="ml-auto">
                  <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                 
                  <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                 <Button onClick={()=>likedPost(user.id)}>Like</Button>
                 <Button onClick={()=>disLikedPost(user.id)} color="danger">disLike</Button>
                  {console.log(user)}
                </div>
              </ListGroupItem>
            )
          )}
        </>
      )) : (
          <h4 className="text-center">No Users</h4>
        )}
    </ListGroup>
  )
}
