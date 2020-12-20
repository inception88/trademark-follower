const trademarksReducer = (state = { trademarks: [] }, action) => {

  switch(action.type) {
      case 'ADD_TRADEMARKS':
        if (!!action.trademarks.message) {
          return {trademarks: state.trademarks} }
        return {
          trademarks: action.trademarks
        }
      case 'FOLLOW_TRADEMARK':
        if (!!action.trademark.message) {
          alert(action.trademark.message)
          return {trademarks: state.trademarks}}
        if (!state.trademarks.filter(trademark => trademark.id === action.trademark.id)[0]) {
        return {
          trademarks: state.trademarks.concat(action.trademark)
        }}
        else return {trademarks: state.trademarks} 
      case 'UNFOLLOW_TRADEMARK':
        return {
          trademarks: state.trademarks.filter(trademark => trademark.id !== action.id)
        }
        case 'CLEAR_TRADEMARKS':
          return {
            trademarks: []
          }
      default:
        return {trademarks: state.trademarks};
    }
  }
  
  export default trademarksReducer;