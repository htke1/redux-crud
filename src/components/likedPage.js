import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from "../context/GlobalState";
function Liked(){
    const { users} = useContext(GlobalContext);
    const [likedList, setList]=useState([]);
    useEffect(()=> {
       const temp= users.filter((item, id)=>{
            return item.like===true;
        })
        setList(temp);
         },[users])
return(
    <div>
   {
      likedList.map((item,id)=>{
         return <p key={id}>
              {item.name}
          </p>
      })
   }
    </div>
)
}

export default Liked;