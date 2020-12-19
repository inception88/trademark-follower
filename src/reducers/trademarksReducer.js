const trademarksReducer = (state = { trademarks: [] }, action) => {
    switch(action.type) {
      case 'ADD_TRADEMARKS':
        return {
          trademarks: action.trademarks
        }
      case 'FOLLOW_TRADEMARK':
        return {
          ...state, trademarks: state.trademarks.concat(action.trademark)
        }
      case 'UNFOLLOW_TRADEMARK':
        return {
            ...state, trademarks: state.trademarks.filter(trademark => trademark.id !== action.trademark)
        }
      default:
        return state;
    }
  }
  
  export default trademarksReducer;