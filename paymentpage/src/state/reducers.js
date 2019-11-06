import { INCREMENT, DECREMENT, RESET } from './actionTypes';

const initalCount = 0;

function countReucer(count = initalCount, action) {
    switch(action.type){
        case INCREMENT: 
            return count + 1;
        case DECREMENT:
            return count - 1;
        case RESET:
            return 0;
        default: 
            return count;
    }

}

export default countReucer;