import React from 'react'
import stylles from './Navbar.module.css' // stylles = obj


console.log(stylles)/*
let c1 = "item"{}
let c2 = "active"
let classes = c1 + " " + c2
// шаблонная строкаkk
let newClasses = `${stylles.c1}${stylles.c2}`; // `` тильда
 inside jsx js stirng = ``*/
const Navbar =  () => {
  return (
         <nav className={stylles.navbar}>
          <div className={`${stylles.item}${stylles.active}`}>Profiler</div>
          <div className={stylles.item}>Users</div>
          <div className={stylles.item}>Messages</div>
        </nav>
       );
}

export default Navbar;
