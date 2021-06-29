import React,{useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css'
import { Menu} from 'semantic-ui-react';
import brand from './brand.png'
import './styles.css'


export const Heading = () => {
  const [menu, setMenu] = useState('home');

  const handleItemClick = (e, { name }) => { 
      setMenu({ menu: name })
  }
  return (
    <Menu  position="left" >
    <Link to='/add'>
  <Menu.Item 
    name='add'
    active={menu === 'add'}
    onClick={handleItemClick}
    id="addSign"
  ><i className="plus square outline icon large" ></i></Menu.Item>
  </Link>
  <Link to='/liked'>
  <Menu.Item
    name='liked'
    active={menu === 'liked'}
    onClick={handleItemClick}
  />
  </Link>
   <Link to='/disliked'>
  <Menu.Item
    name='disliked'
    active={menu === 'disliked'}
    onClick={handleItemClick}
  />
  </Link>
  <Link to='/'>
  <img src={brand} className='brand' alt="brand"/>
  </Link>
 
</Menu>
  )
}
