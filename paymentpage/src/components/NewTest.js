import React from 'react';
// import axios from 'axios';

export default class NewTest extends React.Component {
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
      };

    //   onSubmit = () => {
    //       const data = {
    //           firstName: this.state.fname,
    //           lastName: this.state.lname,
    //           email: this.state.email
    //       };
    //       this.props.handleSubmit(data);
    //       this.setState({
    //         fname: "",
    //         lname: "",
    //         email: ""
    //       });
    //   };

   render(){
      return (
          <div>
                <form>
                    <h2>Create New User</h2>
                    <input
                    name="title"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="First Name"
                    />
                    <input
                    name="title"
                    value={this.state.lastName}
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
                    {/* <button onClick={(this.props.handleSubmit())}> Add User!</button> */}
                </form>

            </div>   
        )
    }
}
