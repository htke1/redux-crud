import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Search = () =>{
    const [searchItem, setSearchItem] = useState('');
    const { users} = useContext(GlobalContext);
    let [filteredList,setFiltered]=useState([]);

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
       setFiltered(temp);
       
    }
return(
    <div>
    <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>
    {
     
}
    </div>
)
}


export default Search;