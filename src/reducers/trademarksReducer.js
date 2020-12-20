const trademarksReducer = (state = { trademarks: [] }, action) => {
  console.log(action);
  console.log(state.trademarks.filter(trademark => trademark.id !== action.id)
  );  
  switch(action.type) {
      case 'ADD_TRADEMARKS':
        return {
          trademarks: action.trademarks
        }
      case 'FOLLOW_TRADEMARK':
        return {
          trademarks: state.trademarks.concat(action.trademark)
        }
      case 'UNFOLLOW_TRADEMARK':
        return {
          trademarks: state.trademarks.filter(trademark => trademark.id !== action.id)
        }
      default:
        return state;
    }
  }
  
  export default trademarksReducer;