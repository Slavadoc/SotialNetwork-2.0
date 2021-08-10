import React from 'react'
import stylles from './MyPosts.module.css'// stylles = obj
import Post from './Post/Post'

const MyPosts =  () => {

  return <div className={stylles.profile}>
           <div><textarea></textarea></div>
           <button>Add post</button>
           <Post message='hi, how are you?'/>
           /*<Post/>
           <Post/>
           <Post/>
           <Post />*/
         </div>
}

export default MyPosts;
