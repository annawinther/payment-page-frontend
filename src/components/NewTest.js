import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getAllData, addNewUser } from '../state/actionsCreators';

export class NewTest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           fname: "",
           lname: "",
           email: ""
        }
        this.props = props;
      }
    //   componentWillReceiveProps() {
    //       console.log('props', this.props);
    //     this.setState({
    //       firstName: this.props.data ? this.props.data.firstName : ""
    //         })
    //     };
    
     handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state);
      };
      // handleSubmit = (data) => {
      //   // e.preventDefault();
      //   const url = 'http://localhost:5000/users';
      //   this.props.addNewUser(url, data).then(res => {
      //     // debugger;
      //     console.log('added!!!!')
      //     // this.getAllData();
      //   }) 
      // }
    //   handleSubmit = () => {
    //     // debugger;
    //     const data = {
    //       firstName: this.state.fname,
    //       lastName: this.state.lname,
    //       email: this.state.email
    //   };

    //       console.log('data', data);
    //       // this.props.addNewUser(url, data).then(res => {
    //         //       // debugger;
    //         //       console.log('added!!!!')
    //         //     }); 
    //         // this.props.getAllData();
    //         // // this.setState({
    //           //   fname: "",
    //           //   lname: "",
    //           //   email: ""
    //           // });
    //         };
            
    //  handleAdd = () => {
    //       // const url = 'http://localhost:5000/users';
    //       // this.props.addNewUser(url).then(res => {
    //       //             // debugger;
    //       //       console.log('added!!!!')
    //       //     });
    // }
   render(){
      return (
          <div>
                <form>
                    <h2>Create New User</h2>
                    <input
                    name="fname"
                    value={this.state.fname}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="First Name"
                    />
                    <input
                    name="lname"
                    value={this.state.lname}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Last Name"
                    />
                    <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    placeholder="Email"
                    />
                    <button>Add</button>
                    {/* <button onClick={}> Add User!</button> */}
                </form>

            </div>   
        )
    }
}

const mapStateToProps = state => {
  console.log(state.data);
  return {
      data: state.data,
      fetchingData: state.fetchingData, 
      addingUser: state.addingUser
      // increment: state.countReducerincrement,
      // decrement: state.decrement,
      // reset: state.reset,
  }
  
}
export default connect(
  mapStateToProps,
  { getAllData, addNewUser }
)(NewTest);