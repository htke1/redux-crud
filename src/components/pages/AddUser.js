import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../action/actions';

export const AddUser = () => {
  const [title, setName] = useState('');
  const [body, setCaption] = useState('');
  const [like, setLike]=useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      title,
      body,like
    }
    dispatch(createPost(newUser));
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  } 
  
  const onChangeCaption = (e) => {
    setCaption(e.target.value);
  }

  return (
    <>
    <h2>Add new post</h2>
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" value={title} onChange={onChange} name="title" placeholder="Enter user" required></Input>
        <Label>Caption</Label>
        <Input type="text" value={body} onChange={onChangeCaption} name="body" placeholder="Enter caption" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </>
  )
}
