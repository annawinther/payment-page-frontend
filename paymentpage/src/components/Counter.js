import React from 'react';

import { connect } from 'react-redux';
import { increment, decrement, reset, addNewUser} from '../state/actionsCreators';
import { getAllData } from '../state/actionsCreators';
import Test from './Test';
import NewTest from './NewTest';

class Counter extends React.Component {
  state = {
    data: [],
    // data: null
  };

    increment = () => {
      this.props.increment();
    }
  
    decrement = () => {
      this.props.decrement();
    }
    
    reset = () => {
        this.props.reset();
    }
    getData = () => {
      const url = 'http://localhost:4000/users';
      this.props.getAllData(url).then(() => {
        this.setState({ data: this.props.data });
      });
    };

   componentDidMount() {
      this.getData();
    }

    handleSubmit = (data) => {
      const url = 'http://localhost:4000/users';
      this.props.addNewUser(url, data).then(res => {
        this.getAllData();
      }) 
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
          <NewTest 
            handleSubmit={this.handleSubmit}
            /> 

          <div>
          {this.props.fetchingData ? (
            <h6> fetching data...</h6>
          ) : this.state.data.length === 0 ? (
            <div>
              <h2>No data found</h2>
            </div>
          ) : (
            ""
          )}

          {this.state.data.map(e => {
            return (
                <Test 
                  key={e.id}
                  fname={e.firstName}
                  lname={e.lastName}
                  email={e.email}
                  // handleSubmit={this.handleSubmit}
                />
            );
          })}
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
        data: state.data,
        fetchingData: state.fetchingData, 
        // increment: state.countReducerincrement,
        // decrement: state.decrement,
        // reset: state.reset,
    }
    
}
export default connect(
    mapStateToProps,
    { getAllData, increment, decrement, reset, addNewUser }
)(Counter);