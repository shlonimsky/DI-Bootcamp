import {SEARCH,GET,LOADING} from './constants'

export const getRobots = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) 
      .then(robots => {
        dispatch({
          type: GET,
          payload: robots
        });
      });
  };

  export const searchFilter = (str) => {
    return{
      type : SEARCH,
      payload : str.toLowerCase()
    }
  }

