import React from 'react'
import stylles from './Header.module.css'
import Smail from '../../common/img/smail.jpg'

const Header =  () => {
  return <div className={stylles.header}>
     <img src={Smail} className={stylles.img}/>
   </div>
}

export default Header
