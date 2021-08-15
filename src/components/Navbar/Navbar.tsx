import React from 'react'
import stylles from './Navbar.module.css' // stylles = obj
import { NavLink } from 'react-router-dom'

console.log(stylles)/*
let c1 = "item"{}
let c2 = "active"
let classes = c1 + " " + c2
// шаблонная строкаkk
let newClasses = `${stylles.c1}${stylles.c2}`; // `` тильда
 inside jsx js stirng = ``*/
const Navbar =  () => {
  return (
    <div className={stylles.navbar}>
      <nav>
       <div>
         <NavLink to="/profile">Profile</NavLink>
       </div>
       <div>
          <NavLink to="/users">Users</NavLink>
       </div>
       <div>
          <NavLink to="/dialogs">Dialog</NavLink>
       </div>
      </nav>
    </div>
  );
}

export default Navbar;
