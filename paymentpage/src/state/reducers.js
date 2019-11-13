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

const initialState = {
    count: 0,
    data: [],
    fetchingData: false,
    success: false,
    error: false,
    message: null,
    addingUser: false
  };

// export function reducer(state = initialState, action){
//     return state;
// }

export function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1
        };
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1
        };
     case RESET:
        return {
          ...state,
          count: 0
        };
      case FETCHING_START:
        return {
          ...state,
          fetchingData: true
        };
      case FETCHING_SUCCESS:
        return {
          ...state,
          success: true,
          error: false,
          fetchingData: false,
          data: action.payload,
          message: action.message
        };
      case FETCHING_FAIL:
        return {
          ...state,
          error: true,
          success: false,
          fetchingData: false,
          message: action.message
        };
      case ADDING_START:
        return {
          ...state,
          addingUser: true,
        };
      case ADDING_SUCCESS: 
        return {
          ...state,
          success: true,
          error: false,
          fetchingData: false,
          addingUser: true,
          data: action.payload,
          message: action.message
        }
      case ADDING_FAILURE:
        return {
          ...state,
          error: true,
          success: false,
          fetchingData: false,
          addingUser: false,
          message: action.message
        }
      default:
        return state;
    }
  }
  
// export const countReducer = (state = initialState, action) => {
//     switch(action.type){
//         case INCREMENT: 
//         // debugger;
//             return {
//                 count: state.count + 1
//             };
//         case DECREMENT:
//         // debugger;
//             return {
//                 count: state.count - 1
//             };
//         case RESET:
//         // debugger;
//             return {
//                 count: 0
//             }
//         default: 
//             return state;
//     }
// };

// export const reducer = () => {
//     return {
//       title: 'Hello world! I\'m in the Redux store!',
//     }
//   }

