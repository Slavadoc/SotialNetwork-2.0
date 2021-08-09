import React from 'react'
import stylles from './Profile.module.css'// stylles = obj
import Sea from '../../common/img/sea.jpg'

const Profile =  () => {
  return <div className={stylles.profile}>
            <img src={Sea}className={stylles.img}/>
         </div>
}

export default Profile;
