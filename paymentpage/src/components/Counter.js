import React from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../state/actionsCreators';

function Counter ({ count, increment, decrement, reset}) {
    return (
        <div>hello
            {/* Count: {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button> */}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Counter);