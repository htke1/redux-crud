import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from "../context/GlobalState";
function Disliked(){
    const { users} = useContext(GlobalContext);
    const [dislikedList, setDisList]=useState([]);
    useEffect(()=> {
       const temp= users.filter((item, id)=>{
            return item.like===false;
        })
        console.log(temp)
        setDisList(temp);
         },[users])
return(
    <div>
   {
      dislikedList.map((item,id)=>{
         return <p key={id}>
              {item.name}
          </p>
      })
   }
    </div>
)
}

export default Disliked;