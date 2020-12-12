const usersReducer = (state = { users: [] }, action) => {
    switch(action.type) {
      case 'CREATE_USER':
        return {
          ...state,
          users: action.user
        }
      default:
        return state;
    }
  }
  
  export default usersReducer;