import React from 'react';

import { connect } from 'react-redux';
// import { increment, decrement, reset} from '../state/actionsCreators';

class Counter extends React.Component {
    increment = () => {
      this.props.dispatch({ type: 'INCREMENT' });
    }
  
    decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' });
    }
    
    reset = () => {
        this.props.dispatch({type: 'RESET' })
    }
  
    render() {
      return (
        <div>
          <h2>Counter</h2>
          <div>
            {this.props.count}
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      )
    }
  }
// function Counter ({ count, increment, decrement, reset}) {
//     console.log(count)
//     console.log('increment',increment)
//     console.log('dec', decrement)
//     console.log('res', reset)
//     return (
//         <div>hello
//             Count: {count}
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }


const mapStateToProps = state => {
    console.log(state);
    return {
        count: state.count,
        // increment: state.countReducerincrement,
        // decrement: state.decrement,
        // reset: state.reset,
    }
    
}
export default connect(
    mapStateToProps
    // { increment, decrement, reset}
)(Counter);