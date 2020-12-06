export const fetchTrademarks = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_TRADEMARKS'})
      fetch('https://tsdrapi.uspto.gov/ts/cd/').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_TRADEMARKS', trademarks: responseJSON })
      })
    }
  }