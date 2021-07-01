import React, { useEffect, useState} from 'react';
import './styles.css'
import {  Grid, Message } from "semantic-ui-react"
import GridBox from './GridBox';
import {  useSelector } from 'react-redux';
import Placeholder  from './util/placeholder';
export const UserList = () => {
  const posts=useSelector((state)=> state.posts)
  const [showData, setData] = useState(posts);
  const [searchItem, setSearchItem] = useState('');
 

  function handleChange(e){
    setSearchItem(e.target.value);

    let temp=showData.filter((user)=>{
        if(searchItem===''){
            return user
        }
        else if(user.title.toLowerCase().includes(searchItem.toLowerCase())){
            return user
        }
    })
   setData(temp);
   
}


  return (
    <>

      {posts.length ? (
       
          searchItem.length===0? (
        <>
         <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>
         <Grid columns={3} stackable id="Cardbox">
          
       {posts.map(post => (
         <>

         <Grid.Column >
          <GridBox id={post.id} title={post.title} body={post.body}/>
          </Grid.Column>
          </>
          ))}
          </Grid>
          
          
          </>
          )
          :
        (  <>
            <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>
            <Grid columns={3} stackable id="Cardbox">
          {
            showData.map(post => (
              <>
              <Grid.Column key={post.id}>
               <GridBox id={post.id} title={post.title} body={post.body}/>
               </Grid.Column>
               </>
            )
          )}
          </Grid>
        </>
      )) : (
        <div columns={3} stackable>
      <Placeholder/>
     <Placeholder/>
     <Placeholder/>
     <Message warning>
    <Message.Header>You must add post before you can view them!</Message.Header>
    <p>Click on + to add new post.</p>
  </Message>
      </div>
        )}
    </>
  )
}
