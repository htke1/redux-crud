import React from 'react';
import { Heading } from "./Heading";
import { UserList } from "./UserList";
import SearchBox from "./Search"
export const Home = () => {
  return (
    <>
      <Heading />
      {/* <SearchBox /> */}
      <UserList />
    </>
  )
}
