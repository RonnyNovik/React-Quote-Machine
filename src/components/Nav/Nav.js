import React from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './Nav.module.css'
const Nav = (props) => (
  <div className={classes.NavContainer}>
    <NavItem click={props.click} icon="fa fas fa-info-circle fa-3x" text="INFO"/>
    <span className={classes.dot}></span>
    <NavItem icon="fa ab fa-instagram fa-3x"  text="IG"/>
  </div>
);

export default Nav;
