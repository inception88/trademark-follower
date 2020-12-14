export const signup = (user) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })
    .then(response => {
        return response.json()})
        .then(json => {
            dispatch({ type: 'AUTHENTICATE', token: json.jwt})
        })
          .catch((errors) => {
            console.log(errors)
          });
    };
}

export const login = (user) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password
        })
    })
    .then(response => {
        return response.json()})
        .then(json => {
            authenticate(dispatch, json)
        })
          .catch((errors) => {
            console.log(errors)
          });
    };
}

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT'})
    };
}

const authenticate = (dispatch, json) => {
        console.log(!!json.jwt)
    if (!!json.jwt) {
        dispatch({ type: 'AUTHENTICATE', token: json.jwt})
    }
    else {
        dispatch({ type: 'FAILURE'})
    }
}