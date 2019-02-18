import React from 'react';
import classes from './NavItem.module.css'
const NavItem = (props) => (
  <div onClick={props.click} className={classes.NavItem}>
   <i className={props.icon}></i>
   <p>{props.text}</p>
  </div>
);

export default NavItem;
