import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const usersAPI = {
  getUsers(){
    return instance.get('/users')
  }
}

let smth = () => {
  
}
export default smth;
