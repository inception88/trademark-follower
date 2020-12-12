export const signup = () => {
    return (dispatch) => {
      dispatch({ type: 'CREAT_USER'})
      fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
      })
    }
  }