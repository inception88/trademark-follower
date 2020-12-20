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

export const followTrademark = (trademark, token) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/trademarks`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Beaer ${token}`
      },
      body: JSON.stringify({
          mark: trademark.mark,
          serialNumber: trademark.serialNumber
      })
  })
  .then(response => {
      return response.json()})
      .then(json => {
        dispatch({ type: 'FOLLOW_TRADEMARK', trademark: json })
      })
        .catch((errors) => {
          console.log(errors)
        });
  };
}

export const unfollowTrademark = (id, token) => {
  return (dispatch) => {

    fetch(`http://localhost:3001/api/v1/trademarks/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Beaer ${token}`
      },
      body: JSON.stringify({
          id: id
      })
  })
  .then(response => {
      return response.json()})
      .then(json => {
        console.log(json)
        dispatch({ type: 'UNFOLLOW_TRADEMARK', id: json.id })
      })
        .catch((errors) => {
          console.log(errors)
        });
  };
}