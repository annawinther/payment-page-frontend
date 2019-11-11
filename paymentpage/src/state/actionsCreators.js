import axios from 'axios';
import { 
    INCREMENT, 
    DECREMENT, 
    RESET, 
    FETCHING_START, 
    FETCHING_SUCCESS, 
    FETCHING_FAIL,
    ADDING_START,
    ADDING_SUCCESS,
    ADDING_FAILURE
} from './actionTypes';


// test setup, counter app
export const increment = () => {
    return {
        type: INCREMENT
    };
}

export const decrement = () => {
    return {
        type: DECREMENT
    };
}

export const reset = () => {
    return {
        type: RESET
    };
}


// test setup, get all users from mock api
export const getAllData = url => dispatch =>  {
    dispatch({ type: FETCHING_START })
    return axios
    .get(url)
    .then(res =>
      {
        if(res.status === 200) {
          dispatch({
            type: FETCHING_SUCCESS,
            payload: res.data,
            message: "Data fetched"
          });
        } 
      }
    )
    .catch(err => {
        dispatch({ type: FETCHING_FAIL })
    });
};


// test setup, add new user to mock api
export const addNewUser = (url, data) => dispatch => {
    dispatch({ type: ADDING_START })
    return axios
    .post(url, data)
    .then(res => {
        dispatch({
            type: ADDING_SUCCESS,
            payload: res.data,
            message: "User Added"
          })
    })
    .catch(err => {
        dispatch({ type: ADDING_FAILURE })
    })
}