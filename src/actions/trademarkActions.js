export const fetchTrademarks = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_TRADEMARKS'})
      fetch('https://http://localhost:3000/api/v1/trademarks.json').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_TRADEMARKS', trademarks: responseJSON })
      })
    }
  }