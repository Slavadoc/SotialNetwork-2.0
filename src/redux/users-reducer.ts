
const GET_USERS = 'GET_USERS'
const SET_USERS = 'SET_USERS'

type initialState ={
  users: Array<number>
  page: number
  pageSize: number
}

let initialState: initialState ={
  users: [],
  page: 1,
  pageSize: 10
}

const usersReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case GET_USERS: {
      return {...state}
    }
    default:
      return state
  }
}
type SetUsersType = {
  type: typeof SET_USERS
  users: Array<number>
}
const setUsers = (users: any) => ({type: SET_USERS, users})

/*export const getUsers = async () =  (dispatch) ={
  let answer  = await usersAPI.getUsers().
  dispatch(setUsers(answer))
}*/

export default usersReducer;
