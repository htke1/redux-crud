import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  users: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  const likedPost = (id) =>{
    dispatch({
      type:'LIKED_POST',
      payload: id
    })
  }

  const disLikedPost = (id) =>{
    dispatch({
      type:'DISLIKED_POST',
      payload: id
    })
  }

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser,
      likedPost,
      disLikedPost
    }}>
      {children}
    </GlobalContext.Provider>
  )
}