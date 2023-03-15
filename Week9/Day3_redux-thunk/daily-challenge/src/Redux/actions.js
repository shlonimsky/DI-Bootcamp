export const getRobots = () => (dispatch) => {
    dispatch({ type: 'LOADING' });
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) 
      .then(robots => {
        dispatch({
          type: 'FETCH',
          payload: robots
        });
      });
  };