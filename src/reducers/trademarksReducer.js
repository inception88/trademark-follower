const trademarksReducer = (state = { trademarks: [] }, action) => {
  console.log(action);

  switch(action.type) {
      case 'ADD_TRADEMARKS':
        return {
          trademarks: action.trademarks
        }
      case 'FOLLOW_TRADEMARK':
        if (!state.trademarks.filter(trademark => trademark.id === action.trademark.id)[0]) {
        return {
          trademarks: state.trademarks.concat(action.trademark)
        }}
        else return { trademarks: state.trademarks }
      case 'UNFOLLOW_TRADEMARK':
        return {
          trademarks: state.trademarks.filter(trademark => trademark.id !== action.id)
        }
      default:
        return state;
    }
  }
  
  export default trademarksReducer;