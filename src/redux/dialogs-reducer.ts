const SET_MESSAGE = 'SET_MESSAGE'

const initialState = {
  messages: [],
  newMssage: ""
}

const dialogsReducer = (state=initialState, action): any => {
  switch(action.type) {
    case "SET_MESSAGE": {
      let newMessage: {
        id: 1,
        newMessage: action.newMessage
      }
      return state
    }
  }
}

export default setMessage = (message) => ({type: SET_MESSAGE, message})
