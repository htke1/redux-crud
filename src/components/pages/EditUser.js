import React, { useState,  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { updatePost } from '../../action/actions';

export const EditUser = (props) => {
 
  const [selectedUser, setSelectedUser] = useState({
    title: '',
    body: ''
  })
  const history = useHistory();
  const dispatch = useDispatch();
  console.log('flag')
  const currentUserId = props.match.params.id;
  console.log(currentUserId);



  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }
 

  const onSubmit = async (e) => {
    e.preventDefault();
  
      dispatch(updatePost(currentUserId, selectedUser))
    
    history.push("/")
  }

  return (
    <>
    <h2>Edit here</h2>
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="title" placeholder="Enter user" required></Input>
        <Label>Title</Label>
        <Input type="text" value={selectedUser.body} onChange={onChange} name="body" placeholder="Enter caption" required></Input>
            </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </>
  )
}
