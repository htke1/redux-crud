import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="/">Sherap's Post</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add User</Link>
            <Link className="btn btn-primary" to="/liked">Liked Post</Link>
            <Link className="btn btn-primary" to="/disliked">disliked Post</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
