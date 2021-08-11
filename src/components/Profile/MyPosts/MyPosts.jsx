import React from 'react'
import stylles from './MyPosts.module.css'// stylles = obj
import Post from './Post/Post'

const MyPosts =  () => {

  return <div className={stylles.profile}>
           <div><textarea></textarea></div>
           <button>Add post</button>
           <Post message='hi, how are you?' likesCount='20'/>
           <Post message="What's up?" likesCount='0'/>
           <Post message="How do you do?"/>
         </div>
}

export default MyPosts;
