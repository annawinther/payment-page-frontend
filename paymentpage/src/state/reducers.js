import { INCREMENT, DECREMENT, RESET } from './actionTypes';

const initialState = {
    count: 0
  };

// export function reducer(state = initialState, action){
//     return state;
// }

export function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
      case INCREMENT:
        return {
          count: state.count + 1
        };
      case DECREMENT:
        return {
          count: state.count - 1
        };
     case RESET:
        return {
            count: 0
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

