export const signup = (user) => {
    return (dispatch) => {
      dispatch({ type: 'CREATE_USER'})
      fetch(`http://localhost:3000/api/v1/users`, {
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
            localStorage.setItem('token', json.jwt)
        })
          .catch((errors) => {
            console.log(errors)
          });
    };
}