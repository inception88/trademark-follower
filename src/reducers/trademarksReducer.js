const trademarksReducer = (state = { authenticated: false, token: [] }, action) => {
    switch(action.type) {
      case 'AUTHENTICATE':
        return {
          token: action.token,
          authenticated: true
        }
      case 'LOGOUT':
        return {
            token: [],
            authenticated: false
        }
      default:
        return state;
    }
  }
  
  export default trademarksReducer;