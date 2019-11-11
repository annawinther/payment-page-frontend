import React from 'react';
// import axios from 'axios';

export default class NewTest extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           firstName: "",
           lastName: "",
           email: ""
        }
        this.props = props;
      }
    //   componentWillReceiveProps() {
    //       console.log(this.props);
    //     this.setState({
    //       firstName: this.props.data ? this.props.data.event_title : ""
    //         })
    //     };
    
     handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };


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
                    name="title"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Email"
                    />
                </form>

            </div>   
        )
    }
}
