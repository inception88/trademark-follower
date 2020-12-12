const usersReducer = (state = { users: [] }, action) => {
    switch(action.type) {
      case 'CREATE_USER':
        return {
          ...state,
          users: action.users
        }
      default:
        return state;
    }
  }
  
  export default usersReducer;