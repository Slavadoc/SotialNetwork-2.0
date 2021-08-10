import stylles from './Post.module.css'// stylles = obj
import Smail from '../../../../common/img/smail.jpg'

const Profile =  (props) => {
  return <div className={stylles.profile}>
             <div><img src={Smail} className={stylles.img}/></div>
             <div>{props.message}</div>
             <div>Post</div>
            <span>Like</span>
            <span>Dislike</span>
         </div>
}

export default Profile;
