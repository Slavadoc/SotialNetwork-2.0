import React from 'react'
import stylles from './Navbar.module.css' // stylles = obj
import { Router,NavLink } from 'react-router-dom'


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
              <NavLink to="/profile" className={`${stylles.item}${stylles.active}`}>Profiler</NavLink>
             </div>
             <div>
               <NavLink to="/users" className={stylles.item}>Users</NavLink>
             </div>
             <div>
              <NavLink to ="/dialogs"className={stylles.item}>Messages</NavLink>
             </div>
            </nav>
           </div>
       );
}

export default Navbar;
