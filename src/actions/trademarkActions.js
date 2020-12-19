export const fetchTrademarks = (token) => {
    return (dispatch) => {
      //fetch(`https://trademark-follower-api.herokuapp.com/api/v1/trademarks`, {
      console.log("Do the fetch!")  
      fetch(`http://localhost:3001/api/v1/trademarks`, {
          headers: {
          "Authorization": `Bearer ${token}`
      }
      })
      .then(response => {
      return response.json()})
      .then(json => {
        dispatch({ type: 'ADD_TRADEMARKS', trademarks: json })
      })
        .catch((errors) => {
          console.log(errors)
        });
      }
    }