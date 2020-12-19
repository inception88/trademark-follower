const trademarksReducer = (state = { follows: [] }, action) => {
    switch(action.type) {
      case 'FOLLOW_TRADEMARK':
        return {
          ...state, follows: state.follows.concat(action.follow)
        }
      case 'UNFOLLOW_TRADEMARK':
        return {
            ...state, follows: state.follows.filter(follow => follow.id !== action.follow)
        }
      default:
        return state;
    }
  }
  
  export default trademarksReducer;